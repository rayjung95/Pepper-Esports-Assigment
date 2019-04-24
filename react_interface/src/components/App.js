import React from 'react'
import Footer from './Footer'
import TodoForm from './TodoForm'
import VisibleTodoList from '../containers/VisibleTodoList'
import Table from './Table';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodo } from "../actions/todo";


class App extends React.Component {

  componentDidMount(){
    this.props.getTodo();
  }
  render() {
    return (
      <Grid container spacing={24}>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            <Grid item xs={12}>
              <AppBar position="sticky" color="primary">
                <Toolbar>
                  <Typography variant="h6" color="inherit">
                    Todo APP
                </Typography>
                </Toolbar>
              </AppBar>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={32}>
            <Grid item xs={12}>
              <Table todoItems={this.props.todoItems} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            <Grid item xl={12}>
              <TodoForm />
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  let { todoReducer } = state;
  let todoItems = todoReducer.todoItems;
  let loading = todoReducer.loading;

  return {
    todoItems,
    loading
  }
};



const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getTodo
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
