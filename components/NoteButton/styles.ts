import styled from 'styled-components/native';
import { TouchableOpacityProps, TextProps } from 'react-native';



interface TextType extends TextProps {
  isDisabled: boolean;
}

export const Container = styled.ImageBackground`
  height: 50px;
  width: 50px;
  background: transparent;
  position: relative;
  margin: 5px 0;
  opacity: 1;
  font:500 1.2rem Knewave;
`;

export const Touchable = styled.TouchableOpacity`
  height: 50px;
  background: transparent;
  justify-content: center;
  align-items: center;
  flex-direction: row;

`;

export const Text = styled.Text<TextType>`
  color: ${(props) => (props.isDisabled ? '#CCC' : '#FFF')};
  font-size: 12px;
  font:400 1.2rem Knewave;
`;