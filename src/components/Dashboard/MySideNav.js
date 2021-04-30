import { Link, useHistory } from 'react-router-dom'
import SideNav, { Toggle, NavItem, Nav, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faComment } from '@fortawesome/free-solid-svg-icons'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import styled from 'styled-components'

const AsideNav = styled(SideNav)`
  position: fixed;
`;

export default function MySideNav() {
    const history = useHistory()

    function handleHome(e) {
        e.preventDefault()
          history.push("/dashboard")
    }

    function handleUserInfo(e) {
        e.preventDefault()
          history.push("/dashboard/user-info")
    }
    
    function handleChat(e) {
        e.preventDefault()
          history.push("/dashboard/chat")
    }
    

    return (
        <>
        <AsideNav>
            <SideNav className="side-nav"
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home" onClick={handleHome}>
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-home fas fa-home" style={{ fontSize: '1.75em' }} /> */}
                        <FontAwesomeIcon icon={faHome} />
                    </NavIcon>
                    
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="chat" onClick={handleChat}>
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                        <FontAwesomeIcon icon={faComment} />
                    </NavIcon>
                    <NavText>
                        Chat
                    </NavText>
                </NavItem>
                <NavItem eventKey="user-info" onClick={handleUserInfo}>
                    <NavIcon>
                        {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} /> */}
                        <FontAwesomeIcon icon={faUser} />
                    </NavIcon>
                    <NavText>
                        User Info
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        </AsideNav>
        </>
    )
}
