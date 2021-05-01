import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Button, Comment, Form, Header,  Card, Icon, Image  } from 'semantic-ui-react'
import CommentList from './CommentList'
import { Link, useHistory } from "react-router-dom"
import asteroidLogo from './images/Asteroids.PNG'
import  chemLogo from './images/ChemiCool.PNG'
import  electricityLogo from './images/Electricity.PNG'

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
                <Image src={asteroidLogo} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Asteriod Harvest</Card.Header>
                <Card.Meta>Posted in 2021</Card.Meta>
                <Card.Description>
                    A space mining simulator for learning asteroid facts.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                </a>
                </Card.Content>
            </Card>
            </Col>
            <Col>
            <Card className="card" onClick={handleGame2}>
                <Image src={electricityLogo } wrapped ui={false} />
                <Card.Content>
                <Card.Header>Electricity</Card.Header>
                <Card.Meta>Posted in 2021</Card.Meta>
                <Card.Description>
                 Test your understanding of basic circuits in this interactive experience!
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />

                </a>
                </Card.Content>
            </Card>
            </Col>
            <Col>
            <Card className="card" onClick={handleGame3}>
                <Image src={chemLogo} wrapped ui={false} />
                <Card.Content>
                <Card.Header>Chemi-Cool</Card.Header>
                <Card.Meta>Posted in 2021</Card.Meta>
                <Card.Description>
                Hone your shooting skills and learn about the periodic table of elements!
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />

                </a>
                </Card.Content>
            </Card>
            </Col>
        </Row>
       <CommentList/>
        </div>
    ) 
}