import styled from 'styled-components/native'
import { Theme } from '../../theme'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 10px 10px 0px 0px;
`

export const Category = styled.Text`
  color: ${Theme.colors.black[10]};
  margin-right: 30%;
  font-weight: 600;
  font-size: 14px;
`

export const ContainerAgender = styled.View`
  height: 40px;
  width: 40px;
  background: red;
`
