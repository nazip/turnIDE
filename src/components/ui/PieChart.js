import React, {Component, PropTypes}  from 'react';
import c3 from 'c3';

class PieChart extends Component {

  componentDidMount() {
    this.chart = c3.generate({
      bindto: '.chart',
      data: {
        columns: this.props.items,
        type: this.props.typeChart
      }
    });
  }

  componentWillReceiveProps() {
    this.chart.unload({ids: this.props.items.map((item) => (item[0]))});
    this.chart.load({columns: this.props.items});
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (<div className="chart" />);
  }
}

PieChart.propTypes = {
  items: PropTypes.array,
  typeChart: PropTypes.string
};

export default PieChart;
