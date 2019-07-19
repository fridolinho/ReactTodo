import React, { Component, PropTypes } from 'react';
import { Row, Col, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

class AddTodo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
      };
    }
    register(input) {
      this.setState({
        input,
      })
    }

    render() {
      const { add } = this.props;
      const { input } = this.state;
        return (
            <div className="add-todo">
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h2>Welcome!</h2>
                  <p>To get started add some todos on your list</p>
                  <InputGroup>
                    <Input onChange={(e) => this.register(e.target.value)}/>
                    <InputGroupAddon addonType="append">
                      <Button color="success" onClick={() => add(input)}>Add</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </div>
        );
    }
}

export default AddTodo;
