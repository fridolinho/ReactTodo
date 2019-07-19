import React, { Component, PropTypes } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

class Todo extends Component {
    render() {
      const {myTodos, remove} = this.props;
        return (
          <ListGroup flush>
          {
            myTodos&&myTodos.map((todo, i) =>
              <ListGroupItem key={todo.id} className="todo">
                {todo.title}
                <span className="delete" onClick={() => remove(i)}>x</span>
              </ListGroupItem>
            )
          }
            
          </ListGroup>
      );
    }
}

export default Todo;
