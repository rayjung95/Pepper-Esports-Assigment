import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo'
import { bindActionCreators } from 'redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';

class TodoForm extends React.Component {
  state = {
    state: 1,
    due_date: '',
    content: ''
  };
  componentDidMount() {
    // this.refs.state.focus();
  }
  onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.due_date)
    var todo = {
      state: this.state.state,
      due_date: this.state.due_date,
      content: this.state.content
    }

    console.log(todo)
    if (todo.content) {
      this.props.addTodo(todo);
      this.refs.form.reset();
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const currencies = [
      {
        value: 1,
        label: 'Todo',
      },
      {
        value: 2,
        label: 'In-Progress',
      },
      {
        value: 3,
        label: 'Done',
      }
    ];
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        {/* <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..." /> */}

        {/* <select ref="state" name="state">
          <option value="1">Todo</option>
          <option value="2">In-Progress</option>
          <option value="3">Done</option>
        </select> */}
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={this.state.state}
          onChange={this.handleChange('state')}
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {' '}
        <TextField
          id="datetime-local"
          label="Due Date"
          type="date"
          value={this.state.due_date}
          onChange={this.handleChange('due_date')}
          InputLabelProps={{
            shrink: true,
          }}
          
          margin="normal"
        />
        {' '}
        <TextField
          id="standard-full-width"
          value={this.state.content}
          onChange={this.handleChange('content')}
          label="Content"
          placeholder="Content"
          multiline
          style={{ width: 'auto', minWidth: '350px' }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <input type="date" ref="due_date" name="due_date" /> */}
        {/* <input type="text" ref="content" className="form-control" placeholder="add a new todo..." /> */}
        {/* <button type="submit" className="btn btn-default">Add</button> */}
        <Fab color="primary" aria-label="Add" type="submit">
          <AddIcon />
        </Fab>

      </form>
    );
  }
}

const mapStateToProps = (state) => {
  // let { events } = state;
  // let songKickEvents = events.songKickEvents;
  // let loading = events.loading;
  // let availableEvents = events.availableEvents;
  // let userLocation = state.user.userLocation;
  // let userAddress = state.user.userAddress;
  // let user = state.user;
  return {

  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTodo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
