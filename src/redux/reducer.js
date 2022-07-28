import { ADD_TEXT, SEND_TEXT } from './actions';

const initialState = { 
    texts: []
};

export default ( state=initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            state.texts.unshift(action.payload);
            return {
                ...state,
                texts: [...state.texts]
            };
        case SEND_TEXT: return { ...state };
        default: return {...state};
    }
};