import React, { useState } from 'react'
import { Background, Category, Close, Container, ContainerDateTime, ContainerRadio, ContainerText, IconClose, TextTitle } from './styles'
import { Input, InputDate, InputNote, InputTime } from '../../component/input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button } from '../../component/button'
import RadioButton from '../../component/radio'
import DatePicker from 'react-native-date-picker'
import api from '../../service'

export function Create({ navigation }) {
  const [selected, setSelected] = useState()
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
    console.log(item)
    if (item === 1) {
      setSelected({
        img: 'https://cdn-icons-png.flaticon.com/128/9662/9662131.png',
        bck: '#DBECF6'
      })
    } else if (item === 2) {
      setSelected({
        img: 'https://cdn-icons-png.flaticon.com/128/8462/8462616.png',
        bck: '#E7E2F3'
      })
    } else {
      setSelected({
        img: 'https://cdn-icons-png.flaticon.com/128/8462/8462616.png',
        bck: '#FEF5D3'
      })
    }
    console.log(selected)
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
          <RadioButton onPress={() => setCategoryOnPress(1)} img={require('../../img/Menu.png')} />
          <RadioButton onPress={() => setCategoryOnPress(2)} img={require('../../img/Category.png')} />
          <RadioButton onPress={() => setCategoryOnPress(3)} img={require('../../img/Winner.png')} />
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
