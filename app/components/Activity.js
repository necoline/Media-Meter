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
  this.setState({ [choice]: !this.state[choice]});
}

toggleMessage(e) {
  e.preventDefault()
  this.setState({ isMessaging: !this.state.isMessaging});
}


cardItem() {
  console.log("card item")
}





something() {
  if (this.state.isMessaging) {
    return (<CommentBox toggleMessage={this.toggleMessage}/>)
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

      {this.something()}


    </div>




  )
}
}



export default Activity;
