import React from 'react';
import {Tab} from 'material-ui/Tabs';
import Tabs from '../../components/Tabs';

const StudentDashboard = () => (
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
        <Tab label="pathways">
          <div>
            <h2>PATHWAYS</h2>
            <p>
              This is another example tab.
            </p>
          </div>
        </Tab>
        <Tab label="job matches">
          <div>
            <h2>JOB MATCHES</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
);

export default StudentDashboard