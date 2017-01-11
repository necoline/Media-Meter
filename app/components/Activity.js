import React from 'react';
import $ from 'jquery';

class Activity extends React.Component {
constructor(props) {
  super(props);
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

likes(){
    return this.props.activity_likes
}

toggleLikes(e){
  e.preventDefault()
  let likes = this.props.activity_likes
  console.log("HERE ARE THE LIKES", likes)
  return likes += 1
}

shares(){
    return this.props.activity_shares
}

comments(){
    return this.props.activity_comments
}

// activityURL() {
//   return link(this.props.activity_url)
//
// }

render() {
  return (
    <div id="item" className="col s12">
      <div className="card horizontal grey darken-3 z-depth-4">
      <div className="card-content white-text">
        <div>
          <img id="avator" src = {this.props.actor_avator}/>
           <span id="username">{this.props.actor_name}</span>
        </div>
        <div id="content" className="container">{this.content()}</div>
        <p className="orange-text">{this.props.activity_date}</p>
      </div>
      <div className="card-action row">
        <span className="left">
          <img id="provider" src = {this.provider()} href={this.props.activity_url}/>
        </span>
        <p>
          <i className="material-icons waves-effect small black-text" onClick={(e) => this.toggleLikes(e)}>thumb_up</i>
          <span className="orange-text">{this.likes()}</span>
        </p>
        <p>
          <i className="material-icons waves-effect small black-text">chat_bubble_outline</i>
          <span className="orange-text">{this.shares()}</span>
        </p>
        <p>
          <i className="material-icons waves-effect small black-text">call_made</i>
          <span className="orange-text">{this.comments()}</span>
        </p>
      </div>
    </div>
  </div>

  )
}
}



export default Activity;
