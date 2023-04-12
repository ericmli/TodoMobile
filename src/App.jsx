import React from 'react'
import MyStack from './rotes'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const date = new Date()
  const dateString = date.toLocaleString('en-EUA', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })
  AsyncStorage.setItem('date', dateString)
  return (
    <MyStack />
  )
}
