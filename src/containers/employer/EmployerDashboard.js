import React from 'react';
import {Tab} from 'material-ui/Tabs';
import Tabs from '../../components/Tabs';
import EmployerJobs from './EmployerJobs/EmployerJobs';
import { Link } from 'react-router-dom';

const EmployerDashboard = () => (
      <Tabs>
        <Tab label="dashboard">
          <div>
            <h2>DASHBOARD</h2>
            <p>
              This is an example tab.
            </p>
            <p>
              You can put any sort of HTML or react component in here. It even keeps the component state!
            </p>
          </div>
        </Tab>
        <Tab label="jobs">
          <EmployerJobs />
        </Tab>
        <Tab label="candidates">
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
        <Tab label="pipelines">
          <div>
            <h2>PIPELINES</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
);

export default EmployerDashboard;
