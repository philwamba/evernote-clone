import React from 'react';
import ReactQuill from 'react-quill';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import styles from './styles';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    const { classes } = this.props;
    return (
    <div className="editor">
      <Grid container direction="row">
        <Grid item md={2} lg={2}>
          <Paper className={classes.paper}>
            <Button variant="contained" color="secondary" className={classes.button}>
              Add Note
            </Button>
          </Paper>
        </Grid>
        <Grid item md={10} lg={10}>
          <ReactQuill 
            value={this.state.text}
            onChange={this.handleChange}
            className={classes.editorContainer} />
        </Grid>
      </Grid>
    </div>
    );
  }
}

export default withStyles(styles)(App);
