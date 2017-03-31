import React, {Component} from 'react';
import { connect } from 'react-redux';
import { onGetRequest } from './actions';
import JobsList from './components/JobsList';

class EmployerJobs extends Component {
  componentDidMount() {
    this.props.onGetRequest();
  }

  render() {
    return <JobsList jobs={this.props.jobs}/>
  }
}

const mapStateToProps = ({employerJobs}) => {
  return {jobs: employerJobs.jobs || []}
};

const mapDispatchToProps = {
  onGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerJobs);
