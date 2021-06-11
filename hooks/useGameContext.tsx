import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  useReducer
} from 'react'

export interface ICombinationNotes {
  clef: number
  position: number
}
type Action = { note: number; combination: ICombinationNotes }
type Answer = 'pending' | 'correct' | 'incorrect'
type ReducerAnswer = (state: Answer, action: Action) => Answer
const reducerAnswer: ReducerAnswer = (state, action) => {
  if (action.note === action.combination.position % 7) {
    return 'correct'
  } else return 'incorrect'
}
interface IGameConfigs {
  answer: Answer
  combination: ICombinationNotes
}

const GameContext = createContext({
  answer: 'pending',
  combination.clef: Math.random() * 3,
  combination.position: Math.random() * 15
} as IGameConfigs)

const GameProvider: React.FC = ({ children }) => {
  const [answer, despatchAnswer] = useReducer(reducerAnswer, 'pending')
  return (
    <GameContext.Provider value={{ answer, despatchAnswer }}>
      {children}
    </GameContext.Provider>
  )
}

function useGameConfigs(): IGameConfigs {
  const context = useContext(GameContext)

  if (!context) {
    throw new Error('')
  }

  return context
}

export { GameProvider, useGameConfigs }
