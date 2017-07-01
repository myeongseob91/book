import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';


class Counter extends Component {

    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    //칼러바꾸기 위한 함수
    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };
        // background: 'rgb(' + color[0] + ' , ' + ..................  es6 템플릿 리터럴 문법 `
        // `string text ${}`
            // this.props.store.getState().counter.number 원래는 이렇게..
        return(
            <div style={style}>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    } // value 랑 control 은 멍청한 컴포넌트여서 값을 받아서만 사용함.
}

 // 함수형태의 파라미터 , State 를 파라미터로 가지는 함수. state 를 해당 컴포넌트의 props 로 연결해줌.
 // redux  state 안에있는걸 이 컴포넌트의 props 로 매핑해줌.
const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
};


 // dispatch 하는 함수를 props 로 연결해줌.
const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
 // redux 에 연결되어있는 Counter 컴포넌트가 반환.
 // this.props.store 로 접근 가능.
 // dispatch 나 getState 가 가능..
 // 똑똑한 컴포넌트인 counter가 리덕스에 연결이 되었다.


