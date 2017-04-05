import React from 'react';
import Paper from 'material-ui/Paper';
import PeriodDropdown from './components/PeriodDropdown';
import TrendItem from './components/TrendItem';


const TrendingPeriod = (props) => {
  const {className, style, data} = props;
  return <Paper zDepth={1} className={className} style={style}>
    <PeriodDropdown style={{width:'100%'}} onChange={props.onChange}/>
    <div>
    {
      (data && data.length > 0)?
        data.map((item, index) => {
          return <TrendItem key={index} data={item}/>
        })
      :
        <span>there are not any trend</span>
    }
    </div>

  </Paper>
}

export default TrendingPeriod;
