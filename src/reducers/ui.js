import * as types from '../actions/ActionTypes';

const initialState = {
    color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
    if(action.type === types.SET_COLOR) {
        return {
            color: action.color  //칼러는 액션에서 가지고옴.
        };
    } else {
        return state;
    }
}


