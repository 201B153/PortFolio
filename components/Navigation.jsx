// import React, { useState, useEffect } from 'react';
// // import { Link } from "react-router-dom";

// // import { greetings, socialLinks } from "../portfolio";
// import Headroom from 'headroom.js';
// import Link from 'next/link';
// import {
//   UncontrolledCollapse,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   NavLink,
//   Nav,
//   Container,
//   Row,
//   Col,
// } from 'reactstrap';

// const greetings = {
//   name: '201b153',
//   title: "Hii 👋, I'm Mayank Singh Tomar",
//   description: "I'm passionate Full Stack web developer.",
//   resumeLink:
//     'https://drive.google.com/file/d/1Jj4QvvMMhRZQrxngrvlhmuTLhgcisaAp/view?usp=sharing',
// };

// const socialLinks = {
//   instagram: 'https://www.instagram.com/mstomar698/',
//   github: 'https://github.com/201b153',
//   linkedin: 'https://www.linkedin.com/in/mayank-tomar-726187205/',
// };

// const Navigation = () => {
//   const [collapseClasses, setCollapseClasses] = useState('');
//   const onExiting = () => setCollapseClasses('collapsing-out');

//   const onExited = () => setCollapseClasses('');

//   useEffect(() => {
//     let headroom = new Headroom(document.getElementById('navbar-main'));
//     // initialise
//     headroom.init();
//   });

//   return (
//     <>
//       <header className="header-global">
//         <Navbar
//           className="navbar-main navbar-transparent navbar-light headroom"
//           expand="lg"
//           id="navbar-main"
//         >
//           <Container>
//             <NavbarBrand href="/" className="mr-lg-5">
//               <h2 className="text-white" id="nav-title">
//                 {greetings.name}
//               </h2>
//             </NavbarBrand>
//             <button
//               className="navbar-toggler"
//               aria-label="navbar_toggle"
//               id="navbar_global"
//             >
//               <span className="navbar-toggler-icon" />
//             </button>
//             <UncontrolledCollapse
//               toggler="#navbar_global"
//               navbar
//               className={collapseClasses}
//               onExiting={onExiting}
//               onExited={onExited}
//             >
//               <div className="navbar-collapse-header">
//                 <Row>
//                   <Col className="collapse-brand" xs="6">
//                     <h3 className="text-black" id="nav-title">
//                       {greetings.name}
//                     </h3>
//                   </Col>
//                   <Col className="collapse-close" xs="6">
//                     <button className="navbar-toggler" id="navbar_global">
//                       <span />
//                       <span />
//                     </button>
//                   </Col>
//                 </Row>
//               </div>
//               <Nav className="align-items-lg-center ml-lg-auto" navbar>
//                 {socialLinks.facebook && (
//                   <NavItem>
//                     <NavLink
//                       rel="noopener"
//                       aria-label="Facebook"
//                       className="nav-link-icon"
//                       href={socialLinks.facebook}
//                       target="_blank"
//                     >
//                       <i className="fa fa-facebook-square" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Facebook
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                 )}
//                 {socialLinks.instagram && (
//                   <NavItem>
//                     <NavLink
//                       rel="noopener"
//                       aria-label="Instagram"
//                       className="nav-link-icon"
//                       href={socialLinks.instagram}
//                       target="_blank"
//                     >
//                       <i className="fa fa-instagram" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Instagram
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                 )}
//                 {socialLinks.github && (
//                   <NavItem>
//                     <NavLink
//                       rel="noopener"
//                       aria-label="Github"
//                       className="nav-link-icon"
//                       href={socialLinks.github}
//                       target="_blank"
//                     >
//                       <i className="fa fa-github" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Github
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                 )}
//                 {socialLinks.linkedin && (
//                   <NavItem>
//                     <NavLink
//                       rel="noopener"
//                       aria-label="Linkedin"
//                       className="nav-link-icon"
//                       href={socialLinks.linkedin}
//                       target="_blank"
//                     >
//                       <i className="fa fa-linkedin" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Linkedin
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                 )}
//                 {socialLinks.twitter && (
//                   <NavItem>
//                     <NavLink
//                       rel="noopener"
//                       aria-label="Twitter"
//                       className="nav-link-icon"
//                       href={socialLinks.twitter}
//                       target="_blank"
//                     >
//                       <i className="fa fa-twitter-square" />
//                       <span className="nav-link-inner--text d-lg-none ml-2">
//                         Twitter
//                       </span>
//                     </NavLink>
//                   </NavItem>
//                 )}
//               </Nav>
//             </UncontrolledCollapse>
//           </Container>
//         </Navbar>
//       </header>
//     </>
//   );
// };

// export default Navigation;
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'rgba(67, 129, 168,0.5)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(67, 129, 168)'
    }
}));

export default function Navigation() {
    const classes = useStyles();

    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes[navRef.current]}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
          </Typography>
                    <Button color="black">Login</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}
