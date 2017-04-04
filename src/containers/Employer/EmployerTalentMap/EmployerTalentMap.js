import React from 'react';
import Paper from 'material-ui/Paper';

const TalentMapLayout = () => {
  return <section>
    <div className="mdl-grid">
      <article className="mdl-cell mdl-cell--8-col">
        <Paper zDepth={1} style={{height:'500px'}}>Talent Map</Paper>
      </article>
      <section className="mdl-cell mdl-cell--4-col">
        <Paper zDepth={1} className="mdl-cell mdl-cell--12-col" style={{height:'300px'}}>statistics</Paper>
        <Paper zDepth={1} className="mdl-cell mdl-cell--12-col" style={{height:'200px'}}>college data</Paper>
      </section>
    </div>
    <Paper zDepth={1}  className="mdl-grid" style={{height:'200px'}}>
      <div className="mdl-cell mdl-cell--6-col">
        Applications
      </div>
      <div className="mdl-cell mdl-cell--6-col">
        Matches
      </div>
      
    </Paper>
    
  </section>
}

export default TalentMapLayout;