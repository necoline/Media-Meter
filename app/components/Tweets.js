import React from 'react';
import $ from 'jquery';

class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.getTweets = this.getTweets.bind(this);
    this.tweets = this.tweets.bind(this);
    this.tweet = this.tweet.bind(this);
    this.state = { tweets: [] }
  }

  getTweets(e) {
    e.preventDefault()
    $.ajax({
      url: `/tweets/${this.refs.handle.value}`,
      type: 'GET'
    }).done( tweets => {
      this.setState({ tweets });
      this.refs.tweetForm.reset();
    });
  }

  // getBanner(e) {
  //   e.preventDefault()
  //   $.ajax({
  //     url: `/tweets/${this.refs.handle.value}`,
  //     type: 'GET'
  //   }).done( banner => {
  //     this.setState({ banner });
  //     this.refs.bannerForm.reset();
  //   });
  // }

  tweets() {
    return this.state.tweets.map( tweet => {
      return (<li className="collection-item" key={tweet.id}>{tweet.text}</li>);
    });
  }

  tweet(e) {
    e.preventDefault();
    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: { tweet: this.refs.tweet.value }
    }).done( (tweet) => {
      //Just logging the tweet you might want to display a flash message
      console.log(tweet.text);
      this.refs.tweetForm.reset();
    });
  }



  render() {
    return (
      <div>
        <h3 className="text-center">Tweets</h3>
        <form ref="postTweet" onSubmit={this.tweet}>
          <input ref="tweet" placeholder="post a tweet" />
          <button className="btn" onClick={ this.tweet }>Submit</button>
        </form>
        <form ref="tweetForm" onSubmit={this.getTweets}>
          <input ref="handle" placeholder="handle" />
          <button className="btn" onClick={ this.getTweets }>Submit</button>
        </form>
        <ul className="collection">
         {this.tweets()}
        </ul>
         {/* <form ref="bannerForm" onSubmit={this.getBanner}>
           <input ref="handle" placeholder="handle" />
           <button className="btn" onClick={ this.getBanner }>Submit</button>
         </form>
         <ul className="collection">
          {this.tweets()}
        </ul> */}
      </div>
    )
  }
}

export default Tweets;
