import React, { useEffect, useReducer, useState } from 'react'

import NoteButton from '../components/NoteButton'
import MusicSheet from '../components/MusicSheet'

import {
  Container,
  Score,
  ButtonsContainer,
  Text
} from '../styles/screens/InfinityMode'
interface IPosition {
  value: number
  y: number
}
type Action = { note: number; position: IPosition; clef: number }
type Answer = 'pending' | 'correct' | 'incorrect'
type ReducerAnswer = (state: Answer, action: Action) => Answer
const reducerAnswer: ReducerAnswer = (state, action) => {
  console.table(action)
  const mod7 =
    (action.position.value % 7) + action.clef > 6
      ? action.clef
      : (action.position.value % 7) + action.clef
  if (action.note === mod7) {
    return 'correct'
  } else return 'incorrect'
}
const InfinityMode = () => {
  const [answer, despatchAnswer] = useReducer(reducerAnswer, 'pending')
  const [musicSheetPosition, setMusicSheetPosition] = useState<IPosition>(
    {} as IPosition
  )

  const [clef, setClef] = useState<number>(2)
  useEffect(() => {
    const rand = Math.round(Math.random() * 15)
    setMusicSheetPosition({
      y: rand,
      value: rand
    })
    console.log(answer)
  }, [answer, clef])
  console.log(musicSheetPosition)

  const notes = ['Lá', 'Sí', 'Dó', 'Ré', 'Mi', 'Fá', 'Sol']
  return (
    <Container source={require('../assets/images/background.png')}>
      <MusicSheet clef={clef} setClef={setClef} />
      <Score>
        <Text>
          Pontos:<Text color="#141211"> 100</Text>
        </Text>
        <Text fontSize={12}>10 notas consecutivas</Text>
      </Score>
      <ButtonsContainer>
        {notes.map((note, index) => (
          <NoteButton
            key={index}
            onPress={() =>
              despatchAnswer({
                note: index,
                position: musicSheetPosition,
                clef: clef
              })
            }
          >
            {note}
          </NoteButton>
        ))}
      </ButtonsContainer>
    </Container>
  )
}

export default InfinityMode
