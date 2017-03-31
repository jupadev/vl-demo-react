import React from 'react';
import {Tabs as TabsMUI} from 'material-ui/Tabs';
import './tabs.css';

const Tabs = (props) => {
  return (
  <div>
    <div className="tabs-container"></div>
    <TabsMUI className="" 
      contentContainerClassName="tab-container" 
      inkBarStyle={{background: '#7ed321', width:'120px', marginLeft: '70px'}}
      tabItemContainerStyle={{width: 120 * props.children.length, background: '#3c3d41', marginLeft: '70px'}}
      >
        {props.children}
    </TabsMUI>
  </div>)
}

export default Tabs;
