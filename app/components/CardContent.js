import React from 'react';

class CardContent extends React.Component {
constructor(props) {
  super(props);

  }

  provider() {
    return `icons/${this.props.provider}.svg`
  }

  content() {
    return this.props.activity_attachment ? this.image() : this.message()
  }

  image() {
    return (<img id="image" src = { this.props.activity_attachment } />)
  }

  message() {
    return (<p id="message">{ this.props.activity_message }</p>)
  }

  responseStyling(responseType) {
    let color = this.props[responseType] ? "blue-text" : "grey-text";
    return `material-icons waves-effect small ${color}`
  }

render() {
  return(
    <div className="card horizontal z-depth-4" id="card">
    <div className="card-content ">
      <div>
        <a href={this.props.actor_url}>
          <img id="avator" src = {this.props.actor_avator}/>
        </a>
          <span id="username">{this.props.actor_name}</span>
      </div>
      <div id="content" className="container">{this.content()}</div>
      <p className="blue-text">{this.props.activity_date}</p>
    </div>
    <div className="card-action container">
      <span><a href={this.props.activity_url}>
        <img id="provider" src= {this.provider()} />
        </a>
      </span>
      <p>
        <i className={this.responseStyling('liked')} onClick={(e) => this.props.toggleResponse(e, 'liked')}>thumb_up</i>
        <span className="blue-text">{this.props.activity_likes}</span>
      </p>
      <p>
        <i className={this.responseStyling('shared')} onClick={(e) => this.props.toggleResponse(e, 'shared')}>call_made</i>
        <span className="blue-text">{this.props.activity_shares}</span>
      </p>
      <p>
          <i className={this.responseStyling('messaged')} onClick={(e) => this.props.toggleMessage(e)}>chat_bubble_outline</i>
          <span className="blue-text">{this.props.activity_comments}</span>
      </p>
    </div>
    </div>
  )
}

}

export default CardContent;
