import styled from 'styled-components/native'
import { Theme } from '../../theme'

export const Container = styled.View`
  flex: 1;
`

export const ContainerTop = styled.View`
  display: flex;
  align-items: center;
`

export const TextTime = styled.Text`
  position: absolute;
  top: 10%;
  font-size: 16px;
  color: ${Theme.colors.white[10]};
  font-weight: 600;
`
export const TextTitle = styled.Text`
  position: absolute;
  bottom: 40%;
  font-size: 30px;
  color: ${Theme.colors.white[10]};
  font-weight: 700;
`
export const ContainerList = styled.View`
  position: relative;
  background: ${Theme.colors.white[10]};
  width: 90%;
  min-height: 25%;
  max-height: 25%;
  margin-left: auto;
  margin-right: auto;
  bottom: 8%;
  border-radius: 20px;
  overflow: hidden;
`
export const List = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly ;
  border-bottom-width: 0.5px;
  border-color: #25252532;
  padding: 10px;
  overflow: hidden;
`

export const ViewImg = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 50px;
`

export const ImageIcon = styled.Image`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: auto;
`

export const ListContainerText = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin-right: 20%;
  height: 80px;
  width: 40%;
`

export const TextBody = styled.Text`
  font-weight: bold;
  color: ${Theme.colors.black[20]};
  font-size: 16px;
`

export const TextBodyTime = styled.Text`
  color: ${Theme.colors.black[20]};
  font-size: 14px;
  text-transform: uppercase;
`

export const CheckBorder = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-width: 1px;
  border-color: ${Theme.colors.blue[10]};
`

export const TextCompleted = styled.Text`
  color: ${Theme.colors.black[10]};
  margin-left: 5%;
  bottom: 5%;
  font-size: 16px;
  font-weight: 600;
`

// ~~~~~~~~~~~~~~~~

export const ContainerListFalse = styled.View`
  position: relative;
  background: ${Theme.colors.white[10]};
  width: 90%;
  max-height: 25%;
  margin-left: auto;
  margin-right: auto;
  bottom: 2%;
  border-radius: 20px;
  overflow: hidden;
`
export const ListFalse = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly ;
  border-bottom-width: 0.5px;
  border-color: #25252532;
  padding: 10px;
  overflow: hidden;
`

export const ViewImgFalse = styled.View`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background: ${Theme.colors.white[20]};
`

export const ImageIconFalse = styled.Image`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin: auto;
`

export const ListContainerTextFalse = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  margin-right: 20%;
  height: 80px;
  width: 40%;

`

export const TextBodyFalse = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-decoration: line-through;
  color: ${Theme.colors.blue[20]};
`

export const TextBodyTimeFalse = styled.Text`
  color: ${Theme.colors.blue[20]};
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: line-through;
`

export const CheckBorderFalse = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`
