import React from 'react'
import TodoForm from './TodoForm'
import Table from './Table';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodo, deleteTodo, deleteBulkTodos } from "../actions/todo";


class App extends React.Component {

  componentDidMount(){
    this.props.getTodo('');
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
            <Grid item xs={11}>
              <Table todoItems={this.props.todoItems}  deleteTodo={this.props.deleteTodo} deleteBulkTodos={this.props.deleteBulkTodos} getTodo={this.props.getTodo}/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container justify="center" spacing={16}>
            <Grid item xs='auto' style={{marginLeft:'20px'}}>
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
    getTodo,
    deleteTodo,
    deleteBulkTodos
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
