import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { QiitaApi } from '../APIs/QiitaApi';

export class ModalContent extends React.Component {
  constructor(props) {
    super(props);
  };

  selectContents = event => {
    this.setState({content: event.target.value})
  }

  render () {
    switch(this.props.content) {
      case "Qiita":
        return (
          <div style={{marginTop: "20px"}}>
            <TextField id="standard-with-placeholder" value={this.props.qiita} placeholder="検索" onChange={event => this.props.modalTextHandle(event, this.props.content)} required />
              <QiitaApi content={this.props.content} searchText={this.props.qiita} selectInfoHandle={this.props.selectInfoHandle}/>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                aria-label="add"
                onClick={event => this.props.pushList(event, this.props.content)}
                >
                push
              </Button>
          </div>
        );
      case "Text":
        return (
          <div>
            <TextField id="standard-full-width"
            label="TODO的なメモ"
            placeholder=""
            fullWidth
            margin="normal"
            onChange={event => this.props.modalTextHandle(event, this.props.content)}
            required
            value={this.props.text}/>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              aria-label="add"
              style={{display: "block"}}
              onClick={event => this.props.pushList(event, this.props.content)}
              >
              push
            </Button>
          </div>
        );
      case "url":
        return (
          <div style={{marginTop: "20px"}}>
            <TextField id="standard-with-placeholder"
            value={this.props.urlText}
            label="URLに付ける名前"
            onChange={event => this.props.modalTextHandle(event, this.props.content + "Text")}
            required />
            <TextField id="standard-with-placeholder"
            value={this.props.url}
            label="URL"
            onChange={event => this.props.modalTextHandle(event, this.props.content)}
            required />
            <Button
              variant="outlined"
              size="small"
              color="primary"
              aria-label="add"
              style={{display: "block"}}
              onClick={event => this.props.pushList(event, this.props.content)}
              >
              push
            </Button>
          </div>
        );
      default:
        return (
          <div></div>
        );
    }
  }
}
