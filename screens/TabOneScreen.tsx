import * as React from 'react';
import NoteButton from '../components/NoteButton';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View>
      <Text>Tab One</Text>
      <NoteButton>Dó</NoteButton>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}


