import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseCount, decreaseCount } from '../Actions/Counter';

class Counter extends Component {

  static mapStateToProps = state => {
    return {
      count: state.count
    }
  }

  static mapDispatchToProps = dispatch => {
    return bindActionCreators({
      increaseCount,
      decreaseCount
    },
      dispatch
    )
  }

  render() {
    const { increaseCount, decreaseCount, count } = this.props;

    return(
      <secton className="container">
        <h1>Counter: { count }</h1>

        <div className="btn-inline">
          <button onClick={ decreaseCount }>Subsract</button>
          <button onClick={ increaseCount } >Add</button>
        </div>
      </secton>
    )
  }

}

export default connect (
  Counter.mapStateToProps,
  Counter.mapDispatchToProps
)(Counter)