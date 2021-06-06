import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Knewave: require('./assets/fonts/Knewave-Regular.ttf')
  });

  if (!isLoadingComplete && !loaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
