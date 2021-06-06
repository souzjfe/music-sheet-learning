import { TextProps } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  border: 1px solid red;
  height: 100%;
  background: transparent;
  opacity: 1;
`

export const Score = styled.View`
  display: flex;
  align-items: center;

  margin-top: 16px;
  margin-bottom: 32px;
`

interface TextType extends TextProps {
  color?: string
  fontSize?: number
}

export const Text = styled.Text<TextType>`
  font-family: 'Knewave';
  font-size: ${({ fontSize }) => fontSize || 24}px;
  text-align: center;

  color: ${({ color }) => color || '#f7f7f7'};
`

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 32px;
`
