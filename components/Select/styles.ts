import styled, { css } from 'styled-components/native'

export const Touchable = styled.TouchableOpacity`
  height: 74px;
  width: 68px;
  margin-bottom: 24px;
`
export const OptionContainer = styled.ImageBackground`
  height: 74px;
  width: 68px;
  background: transparent;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`

export const Text = styled.Text`
  font-family: 'Knewave';
  font-size: 24px;
`

export const Container = styled.View`
  position: relative;
`

interface SelectMenuProps {
  isOpen?: boolean
}

export const SelectMenu = styled.View<SelectMenuProps>`
  display: none;

  ${({ isOpen = false }) =>
    isOpen &&
    css`
      display: flex;
      position: absolute;

      top: 100%;
      z-index: 100;
    `}
`

export const DismissPressScreen = styled.TouchableOpacity`
  border: 1px solid red;
  position: absolute;
  z-index: 50;
  width: 100%;
  height: 100%;
`
