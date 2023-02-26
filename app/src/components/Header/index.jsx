import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

function Header() {

  const user = useSelector(state => state.user.data);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    AuthService.logout();
  }

  return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar style={{ padding: 0, justifyContent: 'space-between' }} variant="dense">
            <Typography 
              variant="h6" 
              sx={{ textDecoration: 'none', color: 'white' }}
              component={Link}
              to="/" 
            >
              BasicsTech
            </Typography>
            {user.id && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  sx={{ p: 1 }}
                >
                  <Avatar 
                    src={user.avatar}
                    sx={{ width: 35, height: 35 }}
                    alt="Avatar" 
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem 
                    onClick={handleClose}
                    component={Link}
                    to="/people"
                  >
                    People
                  </MenuItem>
                  <MenuItem 
                    onClick={handleClose}
                    component={Link}
                    to="/account"
                  >
                    Account
                  </MenuItem>
                  <MenuItem 
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Header;