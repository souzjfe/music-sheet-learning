import styled from 'styled-components/native'
import { TextProps } from 'react-native'

interface TextType extends TextProps {
  isDisabled: boolean
}

export const Container = styled.ImageBackground`
  height: 74px;
  width: 60px;
  background: transparent;
  position: relative;
  margin: 5px 0;
  opacity: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Touchable = styled.TouchableOpacity`
  height: 72px;
  width: 60px;
  background: transparent;
`

export const Text = styled.Text<TextType>`
  color: ${props => (props.isDisabled ? '#CCC' : '#FFF')};
  font-size: 24px;
  font-family: 'Knewave';
  text-align: center;
`
