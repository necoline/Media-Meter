import React from 'react';


class CommentBox extends React.Component {
constructor(props) {
  super(props);

  }

  render (){
    return(
      <div className='col s12 m3'>
        <div className="card horizontal z-depth-4" id="card">
          <div className="card-content ">
            <textarea placeholder="write your comment here"></textarea>
          </div>
          <div className='card-action'>
            <button className='btn' onClick={(e) => this.props.toggleResponse(e, 'messaged')}>Send</button>
            <button className='btn' onClick={(e) => this.props.toggleMessage(e)}><i className="material-icons right">close</i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentBox;
