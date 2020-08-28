import React from 'react';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={1}>
          b
        </Grid>
        <Grid item xs={1}>
          c
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
