import React, {Component}from 'react';
import {Tab} from 'material-ui/Tabs';
import Tabs from '../../components/Tabs';
import EmployerJobs from './EmployerJobs/EmployerJobs';
import TalentMapLayout from './EmployerTalentMap/EmployerTalentMap';

const Loading = () => (<div>Loading...</div>);

class EmployerDashboard extends Component {
    constructor() {
      super();
      this.onChange = this.onChange.bind(this);
      this.state = {
        renderTab: null
      };
    }

    onChange(value) {
      this.props.history.push(`/employer/${value}`)
    }


    componentDidMount() {
      const value =this.props.path;
      switch (value) {
        case "/employer/jobs":
          return this.setState({renderTab: 'jobs'});
        default:
          return;
      }
    }

    render() {
      return <Tabs onChange={this.onChange} initialSelectedIndex={this.props.initialSelectedIndex}>
        <Tab label="dashboard" value="">
          <TalentMapLayout />
        </Tab>
        <Tab label="jobs" value="jobs">
          {this.state.renderTab === 'jobs' ? <EmployerJobs /> : <Loading />}
        </Tab>
        <Tab label="candidates" value="candidates">
          <div>
            <h2>Candidate</h2>
            <p>
              This is an example tab.
            </p>
            <p>
              You can put any sort of HTML or react component in here. It even keeps the component state!
            </p>
          </div>
        </Tab>
        <Tab label="pipelines" value="pipelines">
          <div>
            <h2>PIPELINES</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
    }
      
}

export default EmployerDashboard;
