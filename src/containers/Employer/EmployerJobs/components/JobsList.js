import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const JobsList = ({jobs}) => {
  const items = jobs.map(job => {
    return (<Card key={job._id}>
      <CardTitle title={job.title} subtitle={job.industry.name}/>
      <CardText style={{'height': 200,'overflowY': 'hidden'}}>
        <div dangerouslySetInnerHTML={{__html: job.description.replace(/(?:\\r\\n|\\r|\\n)/g, '<br/>')}}>
        </div>
      </CardText>
      <CardActions>
        <FlatButton label="View Details" />
      </CardActions>
    </Card>)
  });
  return (<div>
    <header><h1>Jobs</h1></header>
    <Paper zDepth={2}>
      {items.length > 0 ? items : <h2 className="mdl-typography--text-center pal">There are not any job</h2>}
    </Paper>
  </div>)
};

export default JobsList;
