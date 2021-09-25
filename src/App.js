/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import  useStyles  from './styles';

function App() {
  const classes=useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              photo album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello this is photo album
            </Typography>
          </Container>
          <div>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  see my photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Secondary actions
                </Button>
              </Grid>
              
            </Grid>
            
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
