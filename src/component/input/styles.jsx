import styled from 'styled-components'
import { Theme } from '../../theme'

export const View = styled.View`

`

export const TextInput = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border-color: ${Theme.colors.black[30]};
  text-align: left;
  font-size: 16px;
  margin-top: 15px;
  color: ${Theme.colors.black[10]};
  border-radius: 5px;
  padding-left: 10px;
  background: white;
`

export const TextError = styled.Text`
  font-size: 12px;
  color: red;
`
export const TextTopInput = styled.Text`
  margin-top: 20px;
  top: 10px;
  color: ${Theme.colors.black[10]};
`

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Touch = styled.TouchableOpacity`
  width: 50%;
  z-index: 90;
`
export const TextInputDate = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  height: 55px;
  border-width: 1px;
  border-color: ${Theme.colors.black[30]};
  font-size: 16px;
  margin-top: 15px;
  color: ${Theme.colors.black[10]};
  border-radius: 5px;
  background: white;
`
export const TextDate = styled.Text`
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
`

// ~~~~~~~~~~~~~~~~~~~~~~~

export const TextInputNote = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border-color: ${Theme.colors.black[30]};
  font-size: 16px;
  margin-top: 15px;
  color: ${Theme.colors.black[10]};
  border-radius: 5px;
  padding-left: 10px;
  background: white;
  height: 150px;
  display: flex;
  
`
