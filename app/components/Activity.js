import React from 'react';
import $ from 'jquery';

class Activity extends React.Component {
constructor(props) {
  super(props);
}

provider() {
  return `icons/${this.props.provider}.svg`
}



render() {
  return (
   <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title"><img src = {this.provider()}/> <img src = {this.props.actor_avator}/></span>
        <p> {this.props.actor_username}: {this.props.activity_message} </p>
        <p>{this.props.activity_date}</p>
      </div>
      <div className="card-action">
        <btn className="material-icons medium btn">thumb_up</btn>
        <btn className="material-icons medium btn">chat_bubble_outline</btn>
        <btn className="material-icons medium btn btn-small">call_made</btn>
      </div>
    </div>
  </div>
  </div>
  )
}
}



export default Activity;
