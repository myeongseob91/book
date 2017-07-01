import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';

const store = createStore(reducers); //스토어가 만들어짐.

//store 가 하는일?
//dispatch(action) 액션을 리듀서로 보낸다. 디스패치가 실행되면 스토어는 리듀서함수에 현재 자신의 상태와 전달받은 액션을 전달해줌.
//그러면 리듀서가 어떤 변화가 필요한지 알아채서 변화한객체를 만들어서 리턴해주면 현상태에 갈아끼운다.

//getState 현재 상태를 반환함.

//subscribe(listener) 상태가 바귈때마다 실행될 콜백함수.

/*console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(actions.increment()); //return 된 액션을 디스패치로 전달.
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200,200,200]));*/

//컴포넌트에서 store 안에있는 데이터를 사용하고  store 를 props 로 전달해서 getState , dispatch 로 변화를 주면 되지만 구조가 복잡해진다.



//provider는 복잡한 작업을 알아서 해줘서 store를 사용하게 해줌.컴포넌트에서 리덕스를 사용할수 있도록.
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
//프로바이더만 썼다고 해서 store 를 사용할수 있는건 아님.
//connect 컴포넌트를 redux 에 연결하는 또다른 함수를 반환.


//스토어를 만드는법.
//createStore 를 불러와서 reducers 를 인수로 전달해서 스토어를 만든다.


