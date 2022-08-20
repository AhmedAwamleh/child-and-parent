import React from "react";
import Card from 'react-bootstrap/Card'
import kids from './assest/kids.jpg'
import Child from './child'

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mony: 100,
            childMony: 0
        }
    }

    giveMony = (value) => {
        this.setState({
            childMony: this.state.childMony + value,
            mony: this.state.mony - value

        })
    }

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={kids} />
                    <Card.Body>
                        <Card.Title>i have only {this.state.mony} </Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <Child childMony={this.state.childMony} askMony={this.giveMony} />
            </>

        )
    }
}

export default Parent;