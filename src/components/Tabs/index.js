import React from 'react';
import {Tabs as TabsMUI} from 'material-ui/Tabs';
import './tabs.css';

const Tabs = (props) => {
  return (
  <div className="main-container">
    <div className="tabs-container"></div>
    <TabsMUI
      contentContainerClassName="tab-container" 
      inkBarStyle={{background: '#7ed321', width:'120px', marginLeft: '70px'}}
      tabItemContainerStyle={{width: 120 * props.children.length, background: '#3c3d41', marginLeft: '70px'}}
      {...props}>
        {props.children}
    </TabsMUI>
  </div>)
}

export default Tabs;
