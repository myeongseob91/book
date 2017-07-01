import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';


const reducers = combineReducers({
    counter, ui
});

//combineReducers 함수안에 합칠 리듀서들을 넣어준다.

export default reducers;

//리듀서가 2개 이상일때는 합쳐줘야함
// index를 만들어서 redux 에서 제공하는 combineReducers 사용.
// 합친 리듀서 내보내주기.

