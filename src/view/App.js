import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/mainActions';
import logo from '../logo.svg';
import './App.css';

class App extends Component {

  getDate() {
    let dateParts = []
    let date = this.props.date
    if (this.props.showDay) dateParts.push(
      padWithZeros(date.getDate(), 2)
    )
    if (this.props.showMonth) dateParts.push(
      padWithZeros(date.getMonth()+1, 2)
    )
    if (this.props.showYear) dateParts.push(
      padWithZeros(date.getFullYear(), 4)
    )
    return dateParts.join('.')
  }
  render() {
    let showDay = this.props.showDay
    let showMonth = this.props.showMonth
    let showYear = this.props.showYear
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <div className="App-intro">
          <div className="toggleButtons">
            <button className={showDay ? 'pressed' :''} onClick={() => this.props.toggleShowDay()}>Day</button>
            <button className={showMonth ? 'pressed' :''} onClick={() => this.props.toggleShowMonth()}>Month</button>
            <button className={showYear ? 'pressed' :''} onClick={() => this.props.toggleShowYear()}>Year</button>
          </div>
          <h3>
            {this.getDate() || 'Not available'}
          </h3>
          <button onClick={() => this.props.clear()}>Clear</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  state = state.main
  return {
    showDay: state.get('showDay'),
    showMonth: state.get('showMonth'),
    showYear: state.get('showYear'),
    date: state.get('date')
  }
}

export default connect(
  mapStateToProps,
  actions
)(App)

function padWithZeros(num, size) {
  let s = num.toString();
  while (s.length < size) s = "0" + s;
  return s;
}