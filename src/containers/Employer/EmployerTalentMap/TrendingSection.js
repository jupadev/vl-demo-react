import React, { Component } from 'react';
import { TrendingPeriod } from '../../../components';

const store = {
  quarter: [
    {count: 233, label: 'views', trend:'up'},
    {count: 90, label: 'Acceptance', trend:'equal'},
    {count: 300, label: 'Applicant', trend:'up'},
    {count: 115, label: 'Matches', trend:'equal'},
    {count: 85, label: 'Saves', trend:'down'}
  ],
  month: [
    {count: 133, label: 'views', trend:'up'},
    {count: 50, label: 'Acceptance', trend:'up'},
    {count: 30, label: 'Applicant', trend:'up'},
    {count: 10, label: 'Matches', trend:'up'},
    {count: 21, label: 'Saves', trend:'down'}
  ],
  week: [
    {count: 3, label: 'Applicant', trend:'up'},
    {count: 1, label: 'Matches', trend:'equal'},
    {count: 10, label: 'Saves', trend:'down'}
  ]

};


class TrendingSection extends Component {
  constructor(props) {
    super(props);
    this.state = {data: store.quarter};
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({data: store[value]});
  }
  render() {
    return <TrendingPeriod 
      onChange= {this.onChange}
      className="mdl-cell mdl-cell--12-col" 
      style={{height:'300px'}}
      data={this.state.data}
    />
  }
}

export default TrendingSection;
