import * as types from '../actions/ActionTypes';
//먼저 액션타입스를 불러옴. 액션에따라 일을 해야하기때문에.


const initialState = {
    number: 0, //카운터에서 필요한 정보는 숫자1개 기본 0...

    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};
//초기상태 설정.

//리듀서는 함수.. 내보낼 함수 .. 함수이름은 counter 이전상태인 state , action 을 받는다.
                                    //state가 undefined 일때 iniialState 로 설정하는 es6 문법. 기본인수 문법.
export default function counter(state = initialState , action) {
                                                            //액션 생성자에서 만들면 디스패치를 통해서 여기로 전달.
                                                            //타입에 따라서 어떠한 일을 할지를 정함.
                                                            //카운터에서 다룰것은 2개 증가,감소
    /* ... */
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1, //기존 값에 1을 더한 객체를 전달해주면 됨. 값을 바꾼게아니고 새로운 객체를 만들어냄.
                dumbObject: { ...state.dumbObject, u: 0 }
                // ...state 라 하면 기존의 state 값들이 다 복사된다. 그다음 기존의값에 새로운값만 바꿀수 있게 된다.
                //dumbObject 에 u 만 0 으로 덮어씌운다.
            };
        case types.DECREMENT: 
            return {
                ...state,
                number: state.number - 1
            };

        default:  //액션이 주어지지 않았을때.
            return state;
    }
}

//이전 상태와 액션을 받아서 다음 상태를 반환함.
//이전 상태를 변경하는게 아니고 새로운 상태를 반환.
