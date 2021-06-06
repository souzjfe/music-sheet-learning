import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Touchable, Text } from './styles'
interface ButtonProps extends TouchableOpacityProps {
  isDisabled?: boolean
  children: string
}

const NoteButton: React.ElementType<ButtonProps> = ({
  isDisabled = false,
  children,
  ...props
}) => {
  return (
    <Touchable {...props}>
      <Container source={require('../../assets/images/button_background.png')}>
        <Text isDisabled={isDisabled}>{children}</Text>
      </Container>
    </Touchable>
  )
}

export default NoteButton
