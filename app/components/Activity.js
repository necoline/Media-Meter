import React from 'react';
import $ from 'jquery';

class Activity extends React.Component {
constructor(props) {
  super(props);
  console.log("HERE ARE THE PROPS", props);
}
render() {
  return (
    <div>
      <h3 className="collection">{this.props.actor_username}</h3>
    </div>

    {/* <div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Card Title</span>
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
</div> */}
  )
}
}



export default Activity;
