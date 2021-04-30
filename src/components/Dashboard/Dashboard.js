import React, { Container, Component, useState }from 'react'
import { Card, Button, Alert, Navbar } from 'react-bootstrap'
import MySideNav from './MySideNav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Layout } from '../Layout'
import UserInfo from "./UserInfo/UserInfo"
import Chat from "./Chat/Chat"
import Home from "./Home/Home"
import Game1 from "./Home/Game1"
import Game2 from "./Home/Game2"
import Game3 from "./Home/Game3"
import { useAuth } from '../../contexts/AuthContext'

export default function Dashboard() {

  const {currentUser, userInfo} = useAuth();

    return (
        <>
        <Navbar  sticky="top" className="ml-5 nav" style={{ maxWidth: "94%" }}>
            <Navbar.Brand  href="#home">Syn4ptic</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="">
                Signed in as: <a href="#login">{userInfo && userInfo.firstName} {userInfo && userInfo.lastName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <MySideNav className="side-nav"/>  
        <Layout>  
          <Switch>
            <Route exact path="/dashboard" component={Home}/>
            <Route exact path="/dashboard/game-1" component={Game1}/>
            <Route exact path="/dashboard/game-2" component={Game2}/>
            <Route exact path="/dashboard/game-3" component={Game3}/>
            <Route exact path="/dashboard/chat" component={Chat}/>
            <Route exact path="/dashboard/user-info" component={UserInfo}/>
          </Switch>
        </Layout>
        </>
    )
}
