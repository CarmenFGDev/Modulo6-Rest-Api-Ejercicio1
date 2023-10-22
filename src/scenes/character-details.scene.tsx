import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterDetailContainer } from 'pods/character-details/character-details.container';


export const CharacterCardScene = () => (
  <AppLayout>
    <CharacterDetailContainer />
  </AppLayout>
);