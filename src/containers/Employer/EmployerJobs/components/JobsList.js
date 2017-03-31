import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const JobsList = ({jobs}) => {
  const items = jobs.map(job => {
    return (<Card key={job._id}>
      <CardTitle title={job.title} />
      <CardText>
        {job.description}
      </CardText>
      <CardActions>
        <FlatButton label="View Details" />
      </CardActions>
    </Card>)
  });
  return (<div>
    <header><h1>Jobs</h1></header>
    <Paper zDepth={2} className="">
      {items.length > 0 ? items : 'There are not any job'}
    </Paper>
  </div>)
};

export default JobsList;
