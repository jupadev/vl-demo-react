import React from 'react';
import Paper from 'material-ui/Paper';
import TableauReport from 'tableau-react';
import TrendingSection  from './TrendingSection';
import './styles/talentMap2.css';

const tableauOptions = {
  height: 490,
  width: '100%',
  hideTabs: false
};
const TalentMapLayout = () => {
  return <section>
    <div className="mdl-grid">
      <article className="mdl-cell mdl-cell--8-col">
        <Paper zDepth={1} style={{height:'536px'}}>
          <header className="dashboard-title">TALENT MAP</header>
          <TableauReport
            url="https://public.tableau.com/views/SuperStoreAPIExample/LinksDemo?:embed=y&:display_count=yes"
            options={tableauOptions}
          />
        </Paper>
      </article>
      <section className="mdl-cell mdl-cell--4-col">
        <TrendingSection />
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