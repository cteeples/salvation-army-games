import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Button, Comment, Form, Header,  Card, Icon, Image  } from 'semantic-ui-react'
import CommentList from './CommentList'
import { Link, useHistory } from "react-router-dom"

export default function Home() {
    
    const history = useHistory()

    function handleGame1() {
        history.push("/dashboard/game-1")
    }

    function handleGame2() {
        history.push("/dashboard/game-2")
    }

    function handleGame3() {
        history.push("/dashboard/game-3")
    }
    return(
        <div className="ml-5 home ">
        <Row className=" align-items-center " style={{ minHeight: "95vh"}}>
            <Col>
            <Card className="card" onClick={handleGame1}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Game 1</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    10 Friends
                </a>
                </Card.Content>
            </Card>
            </Col>
            <Col>
            <Card className="card" onClick={handleGame2}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Game 2</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    10 Friends
                </a>
                </Card.Content>
            </Card>
            </Col>
            <Col>
            <Card className="card" onClick={handleGame3}>
                <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                <Card.Header>Game 3</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>
                    Daniel is a comedian living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    10 Friends
                </a>
                </Card.Content>
            </Card>
            </Col>
        </Row>
       <CommentList/>
        </div>
    ) 
}