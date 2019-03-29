import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from './Actions';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

import './index.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {

    const { robots, searchField, onSearchChange, isPending } = this.props;
    
    if (robots === undefined) {
      return (
        <div></div>
      )
    } 
    const filteredRobots = () => {
      return(
      robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
      })
      )
    }
    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              <CardList filteredRobots={filteredRobots()} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

// action done from mapDispatchToProps will channge state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App)