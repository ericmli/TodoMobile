import styled from 'styled-components/native'
import { Theme } from '../../theme'

export const ButtonContainer = styled.TouchableOpacity`
  position: relative;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  top: 10%;
  height: 56px;
  background: ${Theme.colors.blue[10]};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ButtonText = styled.Text`
  color: ${Theme.colors.white[10]};
  font-weight: 700;
  font-size: 16px;
`
