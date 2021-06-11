import React from 'react'

import Select from '../Select'

import { Container, SelectsContainer, Sheet } from './styles'
interface ISelectProps {
  clef: number
  setClef(clef: number): void
}

const MusicSheet: React.ElementType<ISelectProps> = ({ setClef, clef }) => {
  return (
    <Container>
      <SelectsContainer>
        <Select
          options={[
            { name: 'Sol', value: 'gclef' },
            { name: 'Fá', value: 'fclef' },
            { name: 'Dó', value: 'cclef' }
          ]}
        />
        <Select
          options={[
            { name: 'Dó', value: 'notes' },
            { name: 'C', value: 'letters' }
          ]}
        />
      </SelectsContainer>
      <Sheet
        source={require('../../assets/images/music_sheet_background.png')}
      ></Sheet>
    </Container>
  )
}

export default MusicSheet
