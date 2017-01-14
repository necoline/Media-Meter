import React from 'react';
import axios from 'axios';
import Activity from './Activity';

class Analytics extends React.Component {
constructor(props) {
  super(props);
  this.getActivities = this.getActivities.bind(this);
  this.baseUrl = `https://nuvi-challenge.herokuapp.com/activities`;
  this.state = { activities: [] };
}




componentDidMount(){
  this.getActivities();
  axios.get(`${this.baseUrl}`)
    .then(function (activities => {
      this.setState({ activities })
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}




testRun(choice, id) {
  console.log(choice, id, "here is analytic id")
  // the activity id needs to be found so we know we are incrementing the right one
  // we can increment the count with .increment
  // after we increment we need to .decrement if we click the button again.
  //this.setState { change state on analytics count}
  console.log("im firing on the analytics component")
}



render() {
  let activities = this.state.activities.map( activity => {
    return (
      <Activity key={activity.id} update={this.testRun} {...activity}
      />
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
