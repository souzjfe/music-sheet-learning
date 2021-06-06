import React, { useState } from 'react'
import { Image, TouchableOpacityProps } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import {
  OptionContainer,
  Container,
  SelectMenu,
  Touchable,
  Text,
  DismissPressScreen
} from './styles'

interface OptionProps extends TouchableOpacityProps {
  value: string
  name: string
  image?: string
}

interface SelectProps {
  options: OptionProps[]
}

const Option: React.ElementType<OptionProps> = ({
  name,
  value,
  image,
  ...rest
}) => {
  return (
    <Touchable {...rest}>
      <OptionContainer
        source={require('../../assets/images/select_background.png')}
      >
        {image ? <Image source={{ uri: image }} /> : <Text>{name}</Text>}
        <Icon name="caret-down" size={16} />
      </OptionContainer>
    </Touchable>
  )
}

const Select: React.ElementType<SelectProps> = ({ options, ...rest }) => {
  const [currentSelected, setCurrentSelected] = useState<OptionProps>(
    options[0]
  )
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function handleToggleMenu() {
    setIsOpen(!isOpen)
  }

  function handleSetCurrentOption(option: OptionProps) {
    setCurrentSelected(option)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <DismissPressScreen onPress={() => console.log('aaaa')} />
      <Container>
        <Option
          name={currentSelected.name}
          value={currentSelected.value}
          onPress={handleToggleMenu}
          onPressOut={handleToggleMenu}
        />
        <SelectMenu isOpen={isOpen}>
          {options?.map(
            option =>
              option.name !== currentSelected.name && (
                <Option
                  name={option.name}
                  value={option.value}
                  key={option.value}
                  onPress={() => handleSetCurrentOption(option)}
                />
              )
          )}
        </SelectMenu>
      </Container>
    </>
  )
}

export default Select
