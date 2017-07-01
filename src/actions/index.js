import * as types from './ActionTypes';
// ActionTypes 전부를 불러와서 types 로 접근가능.


export function increment() {
    return {
        type: types.INCREMENT
    }; //객체를 리턴.
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}


//액션 객체를 return 한다.
//액션이 어떤 종류인지를 알려주는 type 이 필수. type 에 따라서 나중에 reducers 가 일을함.
//setColor 는 색상값을 선택해줘야해서 color 도 필요함.
//액션을 그때그때 만들면 귀찮기때문에 액션생성자를 만듬.  ..