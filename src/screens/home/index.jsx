import React, { useState } from 'react'
import { FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CheckBorder, CheckBorderFalse, Container, ContainerList, ContainerListFalse, ContainerTop, ImageIcon, List, ListContainerText, ListContainerTextFalse, ListFalse, TextBody, TextBodyFalse, TextBodyTime, TextBodyTimeFalse, TextCompleted, TextTime, TextTitle, ViewImg, ViewImgFalse } from './styles'
import api from '../../service'
import SvgCheck from '../../img/svg/check'
import { Background } from '../../component/background'
import { Button } from '../../component/button'
import { useFocusEffect } from '@react-navigation/native'

export function Home({ navigation }) {
  const [data, setData] = useState([])
  const [item, setItem] = useState([])
  const [itemFalse, setItemFalse] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      hangleItem()
      pickItem()
    }, [])
  )

  async function hangleItem() {
    setData(await AsyncStorage.getItem('date'))
  }

  async function pickItem() {
    const data = await api.get('posts')
    const { add, remove } = data.data.reduce(
      (resultado, item) => {
        if (item.status === true) {
          resultado.add.push(item)
        } else {
          resultado.remove.push(item)
        }
        return resultado
      },
      { add: [], remove: [] }
    )
    setItem(add)
    setItemFalse(remove)
  }

  async function addItem(id) {
    const data = await api.get(`posts/${id}`)

    const obj = {
      title: data.data.title,
      time: data.data.time,
      status: !data.data.status,
      img: data.data.img,
      bck: data.data.bck
    }
    await api.put(`posts/${id}`, obj)
    pickItem()
  }

  const listAdd = ({ item }) => (
    <List>
      <ViewImg backgroundColor={item.bck} >
        <ImageIcon source={{ uri: item.img }} />
      </ViewImg>
      <ListContainerText>
        <TextBody>{item.title}</TextBody>
        <TextBodyTime>{item.time}</TextBodyTime>
      </ListContainerText>
      <CheckBorder onPress={() => addItem(item.id)} />
    </List>
  )

  const listAddFalse = ({ item }) => (
    <ListFalse>
      <ViewImgFalse backgroundColor={item.bck} >
        <ImageIcon source={{ uri: item.img }} />
      </ViewImgFalse>
      <ListContainerTextFalse>
        <TextBodyFalse>{item.title}</TextBodyFalse>
        <TextBodyTimeFalse>{item.time}</TextBodyTimeFalse>
      </ListContainerTextFalse>
      <CheckBorderFalse onPress={() => addItem(item.id)}>
        <SvgCheck />
      </CheckBorderFalse>
    </ListFalse>
  )

  return (
    <Container>
      <ContainerTop>
        <Background />
        <TextTime>{data}</TextTime>
        <TextTitle>My Todo List</TextTitle>
      </ContainerTop>

      <ContainerList>
        <FlatList
          data={item}
          renderItem={listAdd}
          keyExtractor={(item) => item.id}
        />
      </ContainerList>

      <TextCompleted>Completed</TextCompleted>

      <ContainerListFalse>
        <FlatList
          data={itemFalse}
          renderItem={listAddFalse}
          keyExtractor={(item) => item.id}
        />
      </ContainerListFalse>
      <Button onPress={() => navigation.navigate('Create')} name='Add New Task'/>
    </Container >
  )
}
