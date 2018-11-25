import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import Button from '@material-ui/core/Button';

export class QiitaApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qiitaContents: []
    };
  };

  render() {
    return (
      <div>
      {this.state.qiitaContents.map(list => {
        return <li>{list.title}</li>
      })}
      <Button variant="outlined" color="primary" aria-label="add" onClick={event => this.search(event, this.props.content, this.props.searchText)}>
        search
      </Button>
      </div>
    );
  };

  search = (event, contents, str) => {
    event.preventDefault();
    const params = { page: 1, per_page: 20, query: str };
    const url = 'https://qiita.com/api/v2/items';
    axios.get(url, { params })
    .then( response => {
      console.log(response.data);
      this.setState({qiitaContents: response.data})
    })
  };

}
