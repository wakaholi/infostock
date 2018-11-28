import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
        <div>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            aria-label="add"
            onClick={event => this.search(event, this.props.content, this.props.searchText)}
            >
            search
          </Button>
        </div>
          {this.state.qiitaContents.map(list => {
            return (
              <div style={{marginTop: "10px"}}>
                <FormControlLabel
                  key={list.title}
                  control={
                    <Checkbox
                      color="primary"
                      value={list.url}
                      className="checkedBox"
                      onChange={event => this.props.selectInfoHandle(event, list.title, list.url)}
                    />
                  }
                  label={list.title}
                />
              </div>
            );
          })}
      </div>
    );
  };

  search = (event, contents, str) => {
    event.preventDefault();
    const params = { page: 1, per_page: 20, query: str };
    const url = 'https://qiita.com/api/v2/items';
    axios.get(url, { params })
    .then( response => {
      this.setState({qiitaContents: response.data})
    })
  };

}
