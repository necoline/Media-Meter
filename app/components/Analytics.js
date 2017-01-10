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
    console.log("HERE ARE ALL THE ACTIVITES", activities);
    this.setState({ activities });
  })
}




render() {
  let activities = this.state.activities.map( activity => {
    return (
      <Activity key={activity.id} {...activity}
      />
    )
  })

  return (
    <div>
      { activities }
    </div>

    )
  }
}

export default Analytics;
