import * as React from 'react';
import cx from 'classnames';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../images/logo.png'
import styles from './NavBar.module.scss'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{ background: 'rgba(86, 86, 86, 0.05)', color: 'black' }} >
        <Toolbar style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center'

          }} >
            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                style={{ margin: '5px' }}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{
                display: 'flex', flexDirection: 'row', alignItems: 'center'

              }}>
                <img style={{ width: '8rem',position:'absolute',top:'1.1rem'}} src={logo} alt="logo" />
              </Typography>
            </div>
          </div>
          <div style={{ width: '35rem', display: 'flex', justifyContent: 'space-between',marginLeft:'3rem' }}>
            <a className={styles.nav_links}>Programs</a>
            <a className={cx(styles.nav_links, styles.emin)}><span className={styles.new}>New</span><span>Emotional Intelligence</span> </a>
            <a className={styles.nav_links}>Assessment</a>
            <a className={styles.nav_links}>Centres</a>
          </div>
          <div className={styles.nav_btn_div}>
            <Button className={styles.nav_btn} color="inherit">Login</Button>
            <Button className={cx(styles.nav_btn,styles.signUpBtn)} color="inherit">Sign Up</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}