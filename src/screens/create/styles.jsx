import styled from 'styled-components/native'
import { Theme } from '../../theme'
// import { Theme } from '../../theme'

export const Container = styled.View`
  flex: 1;
`

export const Background = styled.View`
  background: #4A3780;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const Close = styled.TouchableOpacity`
  position: absolute;
  left: 10px;
  width: 48px;
  height: 48px;
  border-width: 1px;
  background: ${Theme.colors.white[10]};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`

export const IconClose = styled.Text`
  font-size: 24px;
  color: ${Theme.colors.black[10]};
  font-weight: 300;
`

export const TextTitle = styled.Text`
  font-size: 16px;
  color: ${Theme.colors.white[10]};
  font-weight: 600;
`

export const ContainerText = styled.View`
  width: 90%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`
export const ContainerRadio = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px 10px 0px 0px;
  gap: 10px;
`

export const Category = styled.Text`
  color: ${Theme.colors.black[10]};
  margin-right: 10%;
  font-weight: 600;
  font-size: 14px;
`

export const ContainerAgender = styled.View`
  height: 40px;
  width: 40px;
`

export const ContainerDateTime = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
`
