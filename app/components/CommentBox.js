import React from 'react';


class CommentBox extends React.Component {
constructor(props) {
  super(props);

  }

  render (){
    return(
      <div className='col s12 m3'>
        <div className="card horizontal z-depth-4" id="comment-card">
          <div className="card-content">
            <textarea placeholder=" write your comment here" id="comment-box"></textarea>
          </div>
          <div className="card-action">
            <i className="material-icons waves-effect small blue-text" id="send" onClick={(e) => this.props.toggleResponse(e, "messaged")}>trending_flat</i>
            <i className="material-icons waves-effect small blue-text" onClick={(e) => this.props.toggleMessage(e)}>close</i>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentBox;
