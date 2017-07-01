import React, { Component, PropTypes } from 'react';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    number: -1 //기본값 -1   -1이나오면 패런트에서 값을 못가져온상태.
};

class Value extends Component {

    render() {
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
