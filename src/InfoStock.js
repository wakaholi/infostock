import React from 'react';
import { AddInfo }  from './components/AddInfo'
import { List } from './components/List'
import { Modal } from './components/Modal'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export class InfoStock extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      info: [{id:null, title:""}],
      nextId: 0,
      text: "",
      urlText: "",
      url: "",
      qiita: "",
      open: false
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
            <Typography variant="h5" color="inherit">
              <p className="title-font">infoStock</p>
            </Typography>
          </Toolbar>
        </AppBar>
        <AddInfo addInfo={this.addInfo}/>
        <List info={this.state.info} deleteInfo={this.deleteInfo} openModal={this.openModal}/>
        <Modal
          open={this.state.open}
          closeModal={this.closeModal}
          modalTextHandle={this.modalTextHandle}
          submitHandle={this.submitHandle}
          text={this.state.text}
          urlText={this.state.urlText}
          url={this.state.url}
          qiita={this.state.qiita}
          />
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
  };

  openModal = () => {
    this.setState({open: true});
  };

  closeModal = () => {
    this.setState({open: false});
    this.setState({text: "", urlText: "", url: "", qiita: ""});
  };

  modalTextHandle = (event, content) => {
    const str = event.target.value;
    if(content == "Text") {
      this.setState({text: str});
    } else if(content == "urlText") {
      this.setState({urlText: str});
    } else if(content == "url") {
      this.setState({url: str});
    } else if(content == "Qiita") {
      this.setState({qiita: str});
    }
  }

  submitHandle = (event, conten) => {
    event.preventDefault();
  }
}
