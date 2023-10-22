export interface Character {
  id: number;
  image: string;
  name: string;
  species: string;
  location: string;
}

export const createEmptyCharacter = (): Character => ({
  id: null,
  image: '',
  name: '',
  species:'',
  location: '',
});
