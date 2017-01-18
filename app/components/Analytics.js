import React from 'react';
import axios from 'axios';
import Activity from './Activity';

class Analytics extends React.Component {
constructor(props) {
  super(props);
  this.baseUrl = `https://nuvi-challenge.herokuapp.com/activities`;
  this.state = { activities: [] };
  this.changeCount = this.changeCount.bind(this);
}

componentDidMount(){
  axios.get(this.baseUrl)
    .then(response => {
       let activities = response.data
      this.setState({ activities })
    })
    .catch(function (error) {
      console.log(error);
    });
}

changeCount(choiceState, choice, id) {
  const activities = this.state.activities.map( activity => {
    if (activity.id === id) {
      choiceState ? activity[choice] -= 1 : activity[choice] += 1
    }
    return activity
  })
  this.setState({ activities })
}

render() {
  let activities = this.state.activities.map( activity => {
    return (
      <Activity key={activity.id} changeCount={this.changeCount} {...activity}/>
    )
  })


  return (

    <div id="page-content">
      { activities }
    </div>
    )
  }
}

export default Analytics;
