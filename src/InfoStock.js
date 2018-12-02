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
    this.state = {
      info: [{id:null, title:""}],
      nextId: 0,
      text: "",
      urlText: "",
      url: "",
      qiita: "",
      open: false,
      infoList: [{id: null, info: []}],
      infoSelect: [{title:"", url:""}],
      listInInfo: [{id: "", infoList: []}],
      nowEditListId: null
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
        <List listInInfo={this.state.listInInfo} info={this.state.info} deleteInfo={this.deleteInfo} openModal={this.openModal}/>
        <Modal
          open={this.state.open}
          closeModal={this.closeModal}
          modalTextHandle={this.modalTextHandle}
          submitHandle={this.submitHandle}
          text={this.state.text}
          urlText={this.state.urlText}
          url={this.state.url}
          qiita={this.state.qiita}
          selectInfoHandle={this.selectInfoHandle}
          pushList={this.pushList}
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
      }),
      listInInfo: this.state.listInInfo.filter(listInInfo => {
        return listInInfo.id !== id;
      }),
    });
  };

  openModal = id => {
    this.setState({open: true});
    this.setState({nowEditListId: id});
  };

  closeModal = () => {
    this.setState({open: false});
    this.setState({text: "", urlText: "", url: "", qiita: ""});
    this.setState({nowEditListId: null});
    this.setState({infoSelect: [{title:"", url:""}]});
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

  selectInfoHandle = (event, title, url) => {

    let alreadyFlg = false;

    if(this.state.infoSelect.length > 1) {
      for(let key in this.state.infoSelect) {

        if(this.state.infoSelect[key].title.indexOf(title) !== -1) {
          alreadyFlg = true;
        }
      }
    } else {
      this.setState({infoSelect: [...this.state.infoSelect, {title: title, url: url}]});
      return;
    }

    if(alreadyFlg) {
      this.setState({
        infoSelect: this.state.infoSelect.filter(infoSelect => {
          return infoSelect.title !== title;
        })
      });
    } else {
      this.setState({infoSelect: [...this.state.infoSelect, {title: title, url: url}]});
    }
  };

  // Enterによるサブミット防止処理
  submitHandle = (event, content) => {
    event.preventDefault();
  }

  pushList = (event, content) => {

    switch(content) {
      case "Qiita":
        if(this.state.infoSelect.length === 1) {
          return;
        }
        this.setState({listInInfo: [...this.state.listInInfo, {id: this.state.nowEditListId, infoList: this.state.infoSelect}]});
        break;
      case "Text":
        if(this.state.text === "") {
          return;
        }
        this.setState({listInInfo: [...this.state.listInInfo, {id: this.state.nowEditListId, infoList: [{title: "", url: ""}, {title: this.state.text, url: ""}]}]});
        break;
      case "url":
        if(this.state.urlText === "" || this.state.url === "") {
          return;
        }
        this.setState({listInInfo: [...this.state.listInInfo, {id: this.state.nowEditListId, infoList: [{title: "", url: ""}, {title: this.state.urlText, url:this.state.url}]}]});
        break;
    }
    this.closeModal();
  }
}
