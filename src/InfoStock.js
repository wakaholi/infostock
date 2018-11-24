import React from 'react';
import { AddInfo }  from './components/AddInfo'
import { List } from './components/List'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class InfoStock extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      todos: [{id:0},{title:"title"}],
      nextId: 0
    };
  };

  render() {
    return (
      <div>
        <AppBar position="static" style={{backgroundColor: "#3366cc"}}>
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              infoStock
            </Typography>
          </Toolbar>
        </AppBar>
        <AddInfo />
        <List todos={this.state.todos} />
      </div>);
  }
}
