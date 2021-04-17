import React, { Container, Component, useState }from 'react'
import { Card, Button, Alert, Navbar } from 'react-bootstrap'
import MySideNav from './MySideNav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Layout } from '../Layout'
import UserInfo from "./UserInfo/UserInfo"
import Chat from "./Chat/Chat"
import Home from "./Home/Home"


export default function Dashboard() {

    return (
        <>
        <Navbar className="ml-5 nav" style={{ maxWidth: "94%" }}>
            <Navbar.Brand  href="#home">S4naptic</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="">
                Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
        <MySideNav/>  
        <Layout>  
          <Switch>
            <Route exact path="/dashboard" component={Home}/>
            <Route exact path="/dashboard/chat" component={Chat}/>
            <Route exact path="/dashboard/user-info" component={UserInfo}/>
          </Switch>
        </Layout>
        </>
    )
}
