import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Touchable, Text } from './styles';
interface ButtonProps extends TouchableOpacityProps {
  isDisabled?: boolean;
  children: string;
}

const NoteButton: React.ElementType<ButtonProps> = ({
  isDisabled = false,
  children,
  ...props
}: ButtonProps) => {
  const image ={uri:"https://reactjs.org/logo-og.png"}
  return (
    <Container source={require('../../assets/images/button_background.png')}>
      <Touchable {...props}>
        <Text isDisabled={isDisabled}>{children}</Text>
      </Touchable>
    </Container>
  );
};

export default NoteButton;