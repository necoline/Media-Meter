import React from 'react';
import $ from 'jquery';
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
}

getActivities() {
  $.ajax({
    url: `${this.baseUrl}`,
    type: 'GET'
  }).done( activities => {
    this.setState({ activities });
  })
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
