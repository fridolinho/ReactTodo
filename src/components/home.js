import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button } from 'reactstrap';
import Header from './header';
import AddTodo from './addtodo';
import Todo from './todo';
import Pages from './page';
import Copyright from './copy';

// const getTodo = () =>  fetch('https://jsonplaceholder.typicode.com/todos/1');

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentPage: 1,
    };
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(data => {
      this.setState({todos:data.slice(0,30)});
    });
  }


  next(i) {
    this.setState({
      currentPage: i + 1,
    })
  }

  remove(i) {
    const { todos } = this.state;
    const newTodos = todos.filter( (todo,index) => index !== i );
    this.setState({
      todos: newTodos,
    })

  }


  addTodo(input) {
    const { todos } = this.state;
    const newTodos = todos;

    const newTodo = {
      "userId": 1,
      "id": todos.length + 1,
      "title": input,
      "completed": false
    };

    newTodos.push(newTodo);
    this.setState({
      todos: newTodos, 
      currentPage: 1
    });
  }

 

  render(){
    const {todos, currentPage} = this.state;
    const myTodos = todos ? todos.reverse().slice((currentPage - 1)*7, 7*currentPage) : null;
    const pages = todos ? Math.ceil(todos.length/7) : 1;
    return(
      <Container className="todo-list">
        <Header />
        <AddTodo add={(input) => this.addTodo(input)}/>
        {myTodos !== null && <Todo myTodos={myTodos} remove={(i) => this.remove(i)} />}
        {pages !== 1 && <Pages pages={pages} next={(i) => this.next(i)} currentPage={currentPage}/>}
        <Copyright />
      </Container>
    )
  }
}
 export default Home;