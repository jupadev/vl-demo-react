import React, {Component} from 'react';
import './styles/TrendItem.css';
import trendUp from '../../../assets/icons/trending-up.svg';
import trendDown from '../../../assets/icons/trending-down.svg';
import trendEqual from '../../../assets/icons/trending-equal.svg';

const TrendItem = (props) => {
    const {count, label, trend} = props.data;
    let url = '';
    let imgAlt='Trending equal';
    switch(trend) {
      case 'up': 
        url = trendUp;
        imgAlt += 'up';
        break;
      case 'down': 
        url = trendDown;
        imgAlt += 'down';
        break;
      default: 
        url = trendEqual;
    };

    return <div className="container">
      <span className="count">{count}</span><span className="label">{label}</span> <img src={url} alt={imgAlt} className="trend"/>
    </div>
  
}

export default TrendItem;