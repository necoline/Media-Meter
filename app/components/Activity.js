import React from 'react';
import axios from 'axios';
import CardContent from './CardContent';
import CommentBox from './CommentBox';

class Activity extends React.Component {
constructor(props) {
  super(props);
  this.toggleMessage = this.toggleMessage.bind(this);
  this.toggleResponse = this.toggleResponse.bind(this);

this.state = {  liked: false,
                shared: false,
                messaged: false,
                isMessaging: false
              };
}

toggleResponse(e, choice){
  e.preventDefault()
  var choiceObj = {
    liked: "activity_likes",
    shared: "activity_shares",
    messaged: "activity_comments"
  }
  this.props.changeCount(this.state[choice], choiceObj[choice], this.props.id);

  if (choice === "messaged") {
    this.setState({ [choice]: true});
    this.setState({ isMessaging: false});
  } else {
    this.setState({ [choice]: !this.state[choice]});
  }
}

toggleMessage(e) {
    e.preventDefault()
  this.setState({ isMessaging: !this.state.isMessaging});
}



cardDisplay() {
  if (this.state.isMessaging) {
    return (<CommentBox
      toggleResponse={this.toggleResponse}
      toggleMessage={this.toggleMessage}/>)
  } else {
    return (<CardContent
      liked={this.state.liked}
      shared={this.state.shared}
      messaged={this.state.messaged}
      toggleResponse={this.toggleResponse}
      toggleMessage={this.toggleMessage} {...this.props} />)
    }
  }

 render() {


  return (
    <div id="item" className="col s12 m6 container">

      {this.cardDisplay()}


    </div>




  )
}
}



export default Activity;
