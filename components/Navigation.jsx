// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
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
// const Navigation = () => {
//   return (
//     <div className={classes.root}>
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
//
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
//
//           </Container>
//         </Navbar>
//       </header>
//     </div>
//   );
// };

// export default Navigation;

import React, { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { makeStyles } from '@material-ui/core/styles';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

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

const drawerWidth = 220;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) =>
    Object.assign(
      {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
      },
      open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }
    )
);
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) =>
  Object.assign(
    {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }
  )
);
const DrawerHeader = styled('div')(({ theme }) =>
  Object.assign(
    Object.assign(
      { display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1) },
      theme.mixins.toolbar
    ),
    { justifyContent: 'flex-start' }
  )
);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff',
    alignSelf: 'left',
  },
  title: {
    flexGrow: 1,
    color: '#fff',
  },
  subtitle: {
    flexGrow: 1,
    color: '#000',
  },
  appBarTransparent: {
    backgroundColor: 'transparent',
  },
  appBarSolid: {
    backgroundColor: '#000000',
  },
}));
export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMode = () => {
    setOpen(false);
  };
  const [navBackground, setNavBackground] = useState('appBarTransparent');
  const navRef = React.useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground('appBarSolid');
      } else {
        setNavBackground('appBarTransparent');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return React.createElement(
    Box,
    { sx: { display: 'flex' } },
    React.createElement(CssBaseline, null),
    React.createElement(
      AppBar,
      { position: 'fixed', className: classes[navRef.current] },
      React.createElement(
        Toolbar,
        null,
        React.createElement(
          Typography,
          { variant: 'h6', className: classes.title },
          'Mayank Singh Tomar'
        ),
        React.createElement(
          IconButton,
          {
            color: 'inherit',
            'aria-label': 'open drawer',
            edge: 'end',
            onClick: handleDrawerOpen,
            sx: Object.assign({}, open && { display: 'none' }),
          },
          React.createElement(MenuIcon, null)
        )
      )
    ),
    React.createElement(
      Main,
      { open: open },
      React.createElement(DrawerHeader, null)
    ),
    React.createElement(
      Drawer,
      {
        sx: {
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        },
        variant: 'persistent',
        anchor: 'right',
        open: open,
      },
      React.createElement(
        DrawerHeader,
        null,
        React.createElement(
          IconButton,
          { onClick: handleDrawerClose },
          theme.direction === 'rtl'
            ? React.createElement(CloseIcon, null)
            : React.createElement(CloseIcon, null)
        ),
        React.createElement(
          IconButton,
          { onClick: handleMode },
          theme.direction === 'rtl'
            ? React.createElement(NightlightIcon, null)
            : React.createElement(LightModeIcon, null)
        ),
        React.createElement(
          IconButton,
          { onClick: handleMode },
          theme.direction === 'rtl'
            ? React.createElement(LightModeIcon, null)
            : React.createElement(NightlightIcon, null)
        ),
        React.createElement(
          IconButton,
          { onClick: handleMode },
          React.createElement(
            Typography,
            { variant: 'h6', className: classes.subtitle },
            '201b153'
          )
          // theme.direction === 'rtl'
          //   ? React.createElement(
          //       Typography,
          //       { variant: 'h6', className: classes.subtitle },
          //       '201b153'
          //     )
          //   : React.createElement(
          //       Typography,
          //       { variant: 'h6', className: classes.title },
          //       '201b153'
          //     )
        )
      ),
      React.createElement(Divider, null),
      React.createElement(
        List,
        null,
        ['About Me'].map((text, index) =>
          React.createElement(
            ListItem,
            { key: text, disablePadding: true },
            React.createElement(
              ListItemButton,
              null,
              React.createElement(
                ListItemIcon,
                null,
                index % 2 === 0
                  ? React.createElement(
                      IconButton,
                      null,
                      React.createElement(PersonOutlineIcon, null)
                    )
                  : React.createElement(
                      IconButton,
                      null,
                      React.createElement(PersonOutlineIcon, null)
                    )
              ),
              React.createElement(
                'a',
                {
                  href: 'https://201b153.blogspot.com/2022/09/mayank-singh-tomar-201b153.html',
                },
                React.createElement(ListItemText, { primary: text })
              )
            )
          )
        )
      ),
      React.createElement(Divider, null),
      React.createElement(
        List,
        null,
        ['Reach Me'].map((text, index) =>
          React.createElement(
            ListItem,
            { key: text, disablePadding: true },
            React.createElement(
              ListItemButton,
              null,
              React.createElement(
                ListItemIcon,
                null,
                index % 2 === 0
                  ? React.createElement(
                      IconButton,
                      null,
                      React.createElement(ConnectWithoutContactIcon, null)
                    )
                  : React.createElement(
                      IconButton,
                      null,
                      React.createElement(PersonOutlineIcon, null)
                    )
              ),
              React.createElement(
                'a',
                { href: '#' },
                React.createElement(ListItemText, { primary: text })
              )
            )
          )
        )
      ),
      React.createElement(Divider, null),
      React.createElement(
        List,
        null,
        ['LinkedIn'].map((text, index) =>
          React.createElement(
            ListItem,
            { key: text, disablePadding: true },
            React.createElement(
              ListItemButton,
              null,
              React.createElement(
                ListItemIcon,
                null,
                index % 2 === 0
                  ? React.createElement(
                      IconButton,
                      null,
                      React.createElement(LinkedInIcon, null)
                    )
                  : React.createElement(
                      IconButton,
                      null,
                      React.createElement(LinkedInIcon, null)
                    )
              ),
              React.createElement(
                'a',
                { href: 'https://www.linkedin.com/in/mayank-tomar-726187205/' },
                React.createElement(ListItemText, { primary: text })
              )
            )
          )
        )
      ),
      React.createElement(Divider, null),
      React.createElement(
        List,
        null,
        ['GitHub'].map((text, index) =>
          React.createElement(
            ListItem,
            { key: text, disablePadding: true },
            React.createElement(
              ListItemButton,
              null,
              React.createElement(
                ListItemIcon,
                null,
                index % 2 === 0
                  ? React.createElement(
                      IconButton,
                      null,
                      React.createElement(GitHubIcon, null)
                    )
                  : React.createElement(
                      IconButton,
                      null,
                      React.createElement(GitHubIcon, null)
                    )
              ),
              React.createElement(
                'a',
                { href: 'https://github.com/201b153' },
                React.createElement(ListItemText, { primary: text })
              )
            )
          )
        )
      ),
      React.createElement(Divider, null),
      React.createElement(
        List,
        null,
        ['Buy me Coffee'].map((text, index) =>
          React.createElement(
            ListItem,
            { key: text, disablePadding: true },
            React.createElement(
              ListItemButton,
              null,
              React.createElement(
                ListItemIcon,
                null,
                index % 2 === 0
                  ? React.createElement(
                      IconButton,
                      null,
                      React.createElement(CoffeeIcon, null)
                    )
                  : React.createElement(
                      IconButton,
                      null,
                      React.createElement(CoffeeIcon, null)
                    )
              ),
              React.createElement(
                'a',
                { href: 'https://www.buymeacoffee.com/201b153' },
                React.createElement(ListItemText, { primary: text })
              )
            )
          )
        )
      ),
      React.createElement(Divider, null)
    )
  );
}
