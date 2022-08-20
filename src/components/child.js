import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mom from './assest/mom.jpg'
class Child extends React.Component {

    ask10 = () => {
        this.props.askMony(10);
    }
    ask20 = () => {
        this.props.askMony(20);
    }
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={mom} />
                    <Card.Body>
                        <Card.Title>i have onlye {this.props.childMony}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Button variant="primary" onClick={this.ask10}>ask for 10  </Button>

                        <Button variant="primary" onClick={this.ask20}>ask for 20</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}




export default Child;