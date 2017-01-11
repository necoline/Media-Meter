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
  return (<p>{ this.props.activity_message }</p>)
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

render() {
  return (
    <div id="item" className="col s12">
      <div className="card horizontal indigo lighten-2">
      <div className="card-content white-text">
        <span className="left">
          <img id="provider" src = {this.provider()}/>
        </span>
        <div>
          <img id="avator" src = {this.props.actor_avator}/>
           {this.props.actor_username}
        </div>
        <div id="content" className="container row">{this.content()}</div>
        <p>{this.props.activity_date}</p>
      </div>
      <div className="card-action row">
        <p>
          <btn className="material-icons waves-effect small" onClick={(e) => this.toggleLikes(e)}>thumb_up</btn>
          {this.likes()}
        </p>
        <p>
          <i className="material-icons waves-effect small">chat_bubble_outline</i>
          {this.shares()}
        </p>
        <p>
          <i className="material-icons waves-effect small">call_made</i>
          {this.comments()}
        </p>
      </div>
    </div>
  </div>

  )
}
}



export default Activity;
