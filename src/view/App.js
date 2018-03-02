import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/mainActions';
import logo from '../logo.svg';
import './App.css';
import {padWithZeros} from "../utils/utils";

class App extends Component {

    getDate() {
        let dateParts = []
        let date = this.props.date
        if (this.props.showDay) dateParts.push(
            padWithZeros(date.getDate(), 2)
        )
        if (this.props.showMonth) dateParts.push(
            padWithZeros(date.getMonth() + 1, 2)
        )
        if (this.props.showYear) dateParts.push(
            padWithZeros(date.getFullYear(), 4)
        )
        return dateParts.join('.')
    }

    render() {
        const dateTogglers = [
            {
                name: 'Day',
                toggler: this.props.toggleShowDay,
                parameter: this.props.showDay
            },
            {
                name: 'Month',
                toggler: this.props.toggleShowMonth,
                parameter: this.props.showMonth
            },
            {
                name: 'Year',
                toggler: this.props.toggleShowYear,
                parameter: this.props.showYear
            }
        ]
        const generateButtons = buttons => buttons.map(
            btn => <button className={btn.parameter ? 'pressed' : ''} onClick={btn.toggler}>{btn.name}</button>
        )
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div className="App-intro">
                    <div>
                        {generateButtons(dateTogglers)}
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

