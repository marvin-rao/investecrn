import { SET_NAME, SET_FAVORITE_PET } from './formActions';

export interface FormState {
    name: string;
    favoritePet: string;
}

const initialState: FormState = {
    name: '',
    favoritePet: '',
};

export const formReducer = (state: FormState = initialState, action: any): FormState => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_FAVORITE_PET:
            return { ...state, favoritePet: action.payload };
        default:
            return state;
    }
};
