import React from 'react';
import Paper from 'material-ui/Paper';
import PeriodDropdown from './components/PeriodDropdown';
import TrendItem from './components/TrendItem';


const TrendingPeriod = (props) => {
  const {className, style, data} = props;
  const isNotEmpty = data && data.length > 0;
  const list =  isNotEmpty ? data.map((item, index) => <TrendItem key={index} data={item}/>) : [];

  return (
    <Paper zDepth={1} className={className} style={style}>
      <PeriodDropdown style={{width:'100%'}} onChange={props.onChange}/>
      <div>
      {
        isNotEmpty?
          list
          :
          <span>There are not any trend</span>
      }
      </div>
    </Paper>
  )
}

export default TrendingPeriod;
