import React from 'react';
import { StatusBar } from 'expo-status-bar';
import ShoeListScreen from './screens/ShoeListScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ShoeListScreen />
    </>
  );
}