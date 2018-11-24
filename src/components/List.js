import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.todos.map(todo=>{
      return <li>{todo.id} {todo.title}</li>
    });
    return (
      <div style={{margin : '20px 20px 0px'}}>
        <Card>
          <CardContent>
            <h2>List</h2>
            <ul>{list}</ul>
          </CardContent>
        </Card>
      </div>);
  }
}
