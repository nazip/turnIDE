/* global __CLIENT__ */
import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import 'c3/c3.css';

class Chart extends Component {

  createChart() {
    if (__CLIENT__) {
      const { data, typeChart } = this.props;
      const c3 = require('c3');
      this.chart = c3.generate({
        bindto: '.chart',
        data: { columns: data, type: typeChart }
      });
    }
  }

  componentDidMount() {
    this.createChart();
  }

  componentDidUpdate() {
    this.createChart();
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (<div className="chart" />);
  }
}

Chart.propTypes = {
  data: PropTypes.array,
  typeChart: PropTypes.string
};

export default Chart;
