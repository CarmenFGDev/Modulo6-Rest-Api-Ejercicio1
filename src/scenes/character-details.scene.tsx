import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterDetailsContainer } from 'pods/character-details/character-details.container';


export const CharacterDetailsScene = () => (
  <AppLayout>
    <CharacterDetailsContainer />
  </AppLayout>
);