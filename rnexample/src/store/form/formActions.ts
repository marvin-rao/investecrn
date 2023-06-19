export const SET_NAME = 'SET_NAME';
export const SET_FAVORITE_PET = 'SET_FAVORITE_PET';

export const addName = (name: string) => ({
    type: SET_NAME,
    payload: name,
});

export const addFavoritePet = (favoritePet: string) => ({
    type: SET_FAVORITE_PET,
    payload: favoritePet,
});
