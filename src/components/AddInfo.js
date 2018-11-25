import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';

export class AddInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  };

  render() {

    return (
      <div style={{margin : '20px 20px 0px'}}>
        <Card>
          <CardContent>
            <h2>メモを追加</h2>
            <form onSubmit={this.handleSubmit}>
              <TextField id="standard-with-placeholder" value={this.state.title} placeholder="メモの名前を入力" onChange={this.handleChange} required/>
              <Button type="submit" variant="fab" mini color="primary" aria-label="add">
                <AddIcon />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>);
  }

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addInfo(this.state.title);
    this.setState({ title: "" });
  };
}
