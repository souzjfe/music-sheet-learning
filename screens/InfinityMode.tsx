import React from 'react'

import NoteButton from '../components/NoteButton'
import MusicSheet from '../components/MusicSheet'

import {
  Container,
  Score,
  ButtonsContainer,
  Text
} from '../styles/screens/InfinityMode'

const InfinityMode = () => {
  return (
    <Container source={require('../assets/images/background.png')}>
      <MusicSheet />
      <Score>
        <Text>
          Pontos:<Text color="#141211"> 100</Text>
        </Text>
        <Text fontSize={12}>10 notas consecutivas</Text>
      </Score>
      <ButtonsContainer>
        <NoteButton>Dó</NoteButton>
        <NoteButton>Ré</NoteButton>
        <NoteButton>Mi</NoteButton>
        <NoteButton>Fá</NoteButton>
        <NoteButton>Sol</NoteButton>
        <NoteButton>Lá</NoteButton>
        <NoteButton>Sí</NoteButton>
      </ButtonsContainer>
    </Container>
  )
}

export default InfinityMode
