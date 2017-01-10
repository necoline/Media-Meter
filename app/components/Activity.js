import React from 'react';
import $ from 'jquery';

class Activity extends React.Component {
constructor(props) {
  super(props);


}
render() {
 let providerImage = () => {
  if (this.props.provider === "twitter") {
    return
      <img src = 'twitter.png'></img>
    }
    else {
      {this.props.provider}

    }

  }

  return (


   <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{this.props.provider}: {this.props.actor_username}</span>
        <p> {this.props.activity_message} </p>
        <p>{this.props.activity_date}</p>
      </div>
      <div className="card-action">
        <a href="#">This is a link</a>
        <a href="#">Reply</a>
      </div>
    </div>
  </div>
</div>
  )
}
}



export default Activity;
