import React from 'react';
var d3 = require('d3');


class Chart extends React.Component {

  componentDidUpdate() {
    this.renderAxis();
  }

  combineSocialCounts() {
    let activities = this.props.activities;

    let facebookActs = activities.filter(data => {
      debugger
    })
    debugger
  }

  renderAxis() {
     var data = this.combineSocialCounts()
    // var data = [4, 8, 15, 16, 23, 42];

    var width = 420,
    barHeight = 30;

var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(this.refs.axis)
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });


  }

  render() {
    return <svg className="axis" ref="axis" transform={this.props.translate}></svg>
  }
}

export default Chart;
