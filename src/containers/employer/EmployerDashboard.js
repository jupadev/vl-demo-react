import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import './styles/tabs.css';

const width = {
  width: '120px',
  padding: '0 10px'
}

const EmployerDashboard = () => (
  <div className="">
    <div className="">
      <div className="tabs-container"></div>
      <Tabs className="" 
        contentContainerClassName="" 
        inkBarStyle={{background: '#7ed321', width:'120px', height: 2}}
        tabItemContainerStyle={{width: 480, background: '#3c3d41'}}
        >
        <Tab label="dashboard" style={width} className="tabs">
          <div className="style100">
            <h2>DASHBOARD</h2>
            <p>
              This is an example tab.
            </p>
            <p>
              You can put any sort of HTML or react component in here. It even keeps the component state!
            </p>
          </div>
        </Tab>
        <Tab label="jobs" 
          style={width}
        >
          <div>
            <h2>JOBS</h2>
            <p>
              This is another example tab.
            </p>
          </div>
        </Tab>
        <Tab label="candidates" style={width}>
          <div>
            <h2>CANDIDATES</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
        <Tab label="pipelines" style={width} >
          <div>
            <h2>PIPELINES</h2>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>

  </div>
);

export default EmployerDashboard;
