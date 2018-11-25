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
      info: [{id:null, title:""}],
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
        <AddInfo addInfo={this.addInfo}/>
        <List info={this.state.info} deleteInfo={this.deleteInfo}/>
      </div>);
  }

  addInfo = title => {
    if(this.state.info.length === 1) {
      this.setState({
      info: [...this.state.info, {id: 1, title: title}],
      nextId: 1});
    } else {
    this.setState({
      info: [...this.state.info, {id: this.state.nextId+1, title: title}],
      nextId: this.state.nextId+1});
    }
  };

  deleteInfo = id => {
    this.setState({
      info: this.state.info.filter(info => {
        return info.id !== id;
      })
    });
  }
}
