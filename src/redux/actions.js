export const ADD_TEXT = 'ADD_TEXT';
export const SEND_TEXT = 'SEND_TEXT';

export const addText = text => ({ type: ADD_TEXT, payload: text });

export const sendText = text => {
    return async function(dispatch){
        await fetch(`http://localhost:3001/api/iecho?text=${text}`) 
            .then( js => js.json() )
            .then( obj => dispatch( { type: ADD_TEXT, payload: obj } ) )
            .catch( err => console.log(err) );
    };
};