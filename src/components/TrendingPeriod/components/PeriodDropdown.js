import React, {Component} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class PeriodDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value || 'quarter'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(proxy, index, value) {
    this.setState({value});
    this.props.onChange(value);
    console.log(value);
  }

  render() {
    return <DropDownMenu value={this.state.value} onChange={this.handleChange} style={this.props.style}>
      <MenuItem value="quarter" primaryText="THIS QUARTER'S REPORT" />
      <MenuItem value="month" primaryText="THIS MONTH'S REPORT" />
      <MenuItem value="week" primaryText="THIS WEEK'S REPORT" />
    </DropDownMenu>
  }
}

export default PeriodDropdown;