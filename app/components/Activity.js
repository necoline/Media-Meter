import React from 'react';
import axios from 'axios';

class Activity extends React.Component {
constructor(props) {
  super(props);
this.state = {  liked: false,
                shared: false,
                messaged: false
              };
}



provider() {
  return `icons/${this.props.provider}.svg`
}

message() {
  return (<p id="message">{ this.props.activity_message }</p>)
}

image() {
  return (<img id="image" src = { this.props.activity_attachment } />)
}

content() {
  return this.props.activity_attachment ? this.image() : this.message()
}

responseStyling(responseType) {
  let color = this.state[responseType] ? "pink-text" : "black-text";
  return `material-icons waves-effect small ${color}`
}

toggleResponse(e, choice){
  e.preventDefault()

  var choiceObj = {
    liked: "activity_likes",
    shared: "activity_shares",
    messaged: "activity_comments"
  }
  this.props.changeCount(choiceObj[choice], this.props.id);
  this.setState({ [choice]: !this.state[choice]});
}





 render() {
// let responseWindow = () => {
// if (responseButtonPressed) {
//   return (<div> THIS IS THE RESPONSE WINDOW </div>)
// } else {
//   return ()
// }
// }

  return (
    <div id="item" className="col s12 m6 container">
      <div className="card horizontal z-depth-4" id="card">
      <div className="card-content ">
        <div>
          <a href={this.props.actor_url}>
            <img id="avator" src = {this.props.actor_avator}/>
          </a>
            <span id="username">{this.props.actor_name}</span>
        </div>
        <div id="content" className="container">{this.content()}</div>
        <p className="pink-text">{this.props.activity_date}</p>
      </div>
      <div className="card-action container">
        <span><a href={this.props.activity_url}>
          <img id="provider" src = {this.provider()} />
          </a>
        </span>
        <p>
          <i className={this.responseStyling('liked')} onClick={(e) => this.toggleResponse(e, 'liked')}>thumb_up</i>
          <span className="pink-text">{this.props.activity_likes}</span>
        </p>
        <p>
          <i className={this.responseStyling('shared')} onClick={(e) => this.toggleResponse(e, 'shared')}>chat_bubble_outline</i>
          <span className="pink-text">{this.props.activity_shares}</span>
        </p>
        <p>
          <a className="accordion">
            <i className={this.responseStyling('messaged')} onClick={(e) => this.toggleResponse(e, 'messaged')}>call_made</i>
            <span className="pink-text">{this.props.activity_comments}</span>
          </a>
        </p>
      </div>
    </div>
  </div>


  )
}
}



export default Activity;
