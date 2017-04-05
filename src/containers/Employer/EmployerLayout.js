import React, {Component}from 'react';
import {Tab} from 'material-ui/Tabs';
import Tabs from '../../components/Tabs';
import Dashboard from './EmployerTalentMap/EmployerTalentMap';
import EmployerJobs from './EmployerJobs/EmployerJobs';

class EmployerLayout extends Component {
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
        case "/employer":
        case "/employer/":
          return this.setState({renderTab: 'dashboard'});
        default:
          return;
      }
    }

    render() {
      return <Tabs onChange={this.onChange} initialSelectedIndex={this.props.initialSelectedIndex}>
        <Tab label="dashboard" value="">
          {this.state.renderTab === 'dashboard' ? <Dashboard /> : null}
        </Tab>
        <Tab label="jobs" value="jobs">
          {this.state.renderTab === 'jobs' ? <EmployerJobs /> : null}
        </Tab>
        <Tab label="candidates" value="candidates">
          <div>
            <h2>Candidate</h2>
            <p>
              It will be available soon!
            </p>
          </div>
        </Tab>
        <Tab label="pipelines" value="pipelines">
          <div>
            <h2>PIPELINES</h2>
            <p>
              It will be available soon!
            </p>
          </div>
        </Tab>
      </Tabs>
    }
      
}

export default EmployerLayout;
