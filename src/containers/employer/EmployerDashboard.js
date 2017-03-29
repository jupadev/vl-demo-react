import React from 'react';
import {Tab} from 'material-ui/Tabs';
import Tabs from '../../components/Tabs';

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
          <div>
            <h2>JOBS</h2>
            <p>
              This is another example tab.
            </p>
          </div>
        </Tab>
        <Tab label="candidates">
          <div>
            <h2>CANDIDATES</h2>
            <p>
              This is a third example tab.
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
