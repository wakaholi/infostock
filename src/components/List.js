import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import {ListInInfo} from './ListInInfo'

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const info = this.props.info.map(info=>{
      if(info.id !== null) {
        return <div style={{margin : '20px 20px 0px'}} className={info.id} key={info.id}>
          <Card>
            <CardContent>
              <h2>{info.title}</h2>
              <ListInInfo todoDelete={this.props.todoDelete} infoId={info.id} listInInfo={this.props.listInInfo} />
              <Button variant="fab" aria-label="Delete" onClick={() => {this.props.deleteInfo(info.id)}} style={{float: "right", marginBottom: "20px"}}>
                <DeleteIcon />
              </Button>
              <Button variant="fab" color="primary" aria-label="add" onClick={() => {this.props.openModal(info.id)}} style={{float: "right", marginBottom: "20px", marginRight: "10px"}}>
                <AddIcon />
              </Button>
            </CardContent>
          </Card>
        </div>
      } else {
        return null
      }
    });
    return (info);
  }
}
