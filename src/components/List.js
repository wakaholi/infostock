import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.info.map(info=>{
      if(info.id !== null) {
        return <li key={info.id}>
          {info.id} {info.title}
          <Button variant="outlined" color="secondary" onClick={() => {this.props.deleteInfo(info.id)}} style={{marginLeft: "20px"}}>
            Delete
          </Button>
        </li>
      } else {
        return null
      }
    });
    return (
      <div style={{margin : '20px 20px 0px'}}>
        <Card>
          <CardContent>
            <h2>Info</h2>
            <ul>{info}</ul>
          </CardContent>
        </Card>
      </div>);
  }
}
