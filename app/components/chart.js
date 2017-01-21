import React from 'react';
var d3 = require('d3');


class Chart extends React.Component {

  componentDidUpdate() {
    this.renderAxis();
  }

  combineSocialCounts() {
    let activities = this.props.activities;

    let filterfunc = (provider) => {
      return activities.filter(activity => {
        return activity.provider === provider ? true : false
      }).length
    }

    let facebookActs = filterfunc("facebook")
    let twitterActs = filterfunc("twitter")
    let instagramActs = filterfunc("instagram")
    let tumblrActs = filterfunc("tumblr")

    return [facebookActs, twitterActs, instagramActs, tumblrActs]
  }

  renderAxis() {
     var data = this.combineSocialCounts()
     var names = ["facebook", "twitter", "instagram", "tumblr"]

    var width = 420,
    barHeight = 30;

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var color = d3.scaleOrdinal()
    .range(["#4FC3F7", "#03A9F4", "#0288D1", "#01579B"]);
    //
//     .attr("fill", function(d) {
//       return "rgb(0, 0, " + (d * 10) + ")";
//     })

var chart = d3.select(this.refs.axis)
    .attr("width", width)
    .attr("height", barHeight * data.length);



var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; })



bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1)
    .style('fill', color);




bar.append("svg:image")
    .attr("xlink:href", function(d,i){ return `icons/${names[i]}.svg` })
    .attr("x", function(d) { return 10 })
    .attr("width", 25)
    .attr("height", 25)
    .attr("y", barHeight / 10);



    bar.append("text")
        .attr("x", 50)
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; })
        .style('fill', 'white');



// bar.append("svg:image")
//         .attr("xlink:href", "http://www.clker.com/cliparts/1/4/5/a/1331068897296558865Sitting%20Racoon.svg")
//         .attr("width", 200)
//         .attr("height", 200)
//         .attr("x", 228)
//         .attr("y",53);

  }

  render() {
    return <svg className="axis" ref="axis" transform={this.props.translate}></svg>
  }
}

export default Chart;
