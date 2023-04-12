import React, { useState } from 'react'
import { Background, BorderRadio, Category, Close, Container, ContainerDateTime, ContainerRadio, ContainerText, IconClose, TextTitle } from './styles'
import { Input, InputDate, InputNote, InputTime } from '../../component/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '../../component/button'
import RadioButton from '../../component/radio'
import DatePicker from 'react-native-date-picker'
import api from '../../service'
import SvgBorder2 from '../../img/svg/borderMain2'

const obj = [
  {
    img: 'https://cdn-icons-png.flaticon.com/128/9662/9662131.png',
    bck: '#DBECF6'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/128/8462/8462616.png',
    bck: '#E7E2F3'
  },
  {
    img: 'https://cdn-icons-png.flaticon.com/128/8462/8462616.png',
    bck: '#FEF5D3'
  }
]

export function Create({ navigation }) {
  const [selected, setSelected] = useState({
    img: 'https://cdn-icons-png.flaticon.com/128/9662/9662131.png',
    bck: '#DBECF6'
  })
  const [selectedColor, setSelectedColor] = useState(0)
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const schema = yup.object().shape({
    title: yup.string().max(15, 'Number of Characters Exceeded')
  })
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      note: ''
    },
    resolver: yupResolver(schema)
  })

  async function setCategoryOnPress(item) {
    setSelected(obj[item])
    setSelectedColor(item)
  }
  const formattedDate = date.toLocaleDateString('en-EUA')
  const formattedTime = date.toLocaleTimeString('en-EUA')
  const onSubmit = async input => {
    const formInput = {
      title: input.title,
      note: input.note,
      bck: selected.bck,
      img: selected.img,
      status: true,
      time: formattedTime,
      date: formattedDate
    }
    console.log(formInput)
    api.post('posts', formInput)
    navigation.navigate('Home')
  }
  return (
    <Container>
      <Background>
        <Close onPress={() => navigation.goBack()}><IconClose>X</IconClose></Close>
        <TextTitle>Add New Task</TextTitle>
      </Background>
      <ContainerText>
        <Input
          name="title"
          placeholder="Task Title"
          control={control}
          errors={errors}
        />
        <ContainerRadio>
          <Category>Category</Category>
          <BorderRadio value={selectedColor === 0}>
          <RadioButton onPress={() => setCategoryOnPress(0)} img={require('../../img/Menu.png')} />
          </BorderRadio>
          <BorderRadio value={selectedColor === 1}>
          <RadioButton onPress={() => setCategoryOnPress(1)} img={require('../../img/Category.png')} />
          </BorderRadio>
          <BorderRadio value={selectedColor === 2}>
          <RadioButton onPress={() => setCategoryOnPress(2)} img={require('../../img/Winner.png')} />
          </BorderRadio>
        </ContainerRadio>

        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />

        <ContainerDateTime>
          <InputDate
            onPress={() => setOpen(true)}
            placeholder="Date"
            value={formattedDate}
          />
          <InputTime
            onPress={() => setOpen(true)}
            placeholder="Time"
            value={formattedTime}
          />
        </ContainerDateTime>
        <InputNote
          name="note"
          placeholder="Notes"
          control={control}
          errors={errors}
        />
        <Button name='Save' onPress={handleSubmit(onSubmit)} />

      </ContainerText>
    </Container>
  )
}
