import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';

import Component from './src/App';

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Component />
    </TailwindProvider>
  );
}
