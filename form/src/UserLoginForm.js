import React, { Component } from 'react'
import { Button, Form, Row, Col, Container, FormControl, ListGroup, Badge } from 'react-bootstrap'

class UserLoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fName: '',
                lName: '',
                address: '',
                country: '',
                about: '',
            },
            data: [],
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.detail = this.detail.bind(this)
    }

    onChangeHandler(event) {
        let { name, value } = event.target
        var user = { ...this.state.user }
        user[name] = value
        this.setState(
            {
                user: user
            }
        )
    }

    addUser() {
        this.setState(
            {
                data: [...this.state.data, this.state.user]
            }
        )
    }

    deleteUser(id) {
        this.state.data.splice(id, 1);
        this.setState({
            data: this.state.data
        })
    }
    userDetail = ''
    detail(id) {
        this.userDetail = <ListGroup as="ol">
            <ListGroup.Item
                as="li"
            >
                <div>{this.state.data[id].fName}</div>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
            >
                <div>{this.state.data[id].lName}</div>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
            >
                <div>{this.state.data[id].address}</div>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
            >
                <div>{this.state.data[id].country}</div>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
            >
                <div>{this.state.data[id].about}</div>
            </ListGroup.Item>
        </ListGroup>;

        this.setState({
            data: this.state.data
        });
    }


    render() {
        let data = this.state.data;
        return (<div>
            <Container style={{ border: '1px solid black' }} className="mt-3 col-4" >
                <h2>User Registraion Form</h2>
                <Form>
                    <Row className="mb-3">
                        <Form.Group controlId="fName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="fName" value={this.state.fName} onChange={this.onChangeHandler} placeholder="Enter First Name" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group controlId="lName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lName" value={this.state.lName} onChange={this.onChangeHandler} placeholder="Enter Last Name" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text-aria" name="address" value={this.state.address} onChange={this.onChangeHandler} placeholder="e.g: 1234 Main St" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Select Country</Form.Label>
                        <Form.Select name="country" value={this.state.country} onChange={this.onChangeHandler}>
                            <option >Select Your Country</option>
                            <option value="pak">Pakistan</option>
                            <option value="ind">India</option>
                            <option value="afghan">Afghanistan</option>
                            <option value="chi">China</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>About</Form.Label>
                        <Form.Control as="textarea" rows={3} name="about" value={this.state.about} onChange={this.onChangeHandler} placeholder="Say something about yourself..." />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={this.addUser} className="mb-1">
                        Add User
                    </Button>
                </Form>
            </Container>
            <Row>
                <Col className="mt-1 col-5 offset-2">
                    <ListGroup as="ol" numbered>
                        {
                            data.map((itm, ind) =>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                    onClick={() => this.detail(ind)}
                                    key={"user_" + ind}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {itm.fName}
                                    <Button variant="danger" onClick={() => this.deleteUser(ind)}>
                                        x
                                    </Button>
                                </ListGroup.Item>)
                        }
                    </ListGroup>
                </Col>
                <Col className="mt-1 col-5">
                    {this.userDetail}
                </Col>
            </Row>

        </div>
        )
    }
}

export default UserLoginForm
