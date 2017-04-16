import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import c3 from 'c3';

class Chart extends Component {

  componentDidMount() {
    this.chart = c3.generate({
      bindto: '.chart',
      data: {
        columns: this.props.data,
        type: this.props.typeChart
      }
    });
  }

  componentWillReceiveProps() {
    this.chart.unload({ids: this.props.data.map((item) => (item[0]))});
    this.chart.load({columns: this.props.data});
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
