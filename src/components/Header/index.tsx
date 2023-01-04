import { AccountCircle } from '@mui/icons-material';
import StoreIcon from '@mui/icons-material/Store';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [anchorUserMenu, setAnchorUserMenu] = useState<HTMLElement | null>(
    null
  );
  // const avatarUrl = 'https://github.com/davi1985.png';
  const avatarUrl = '';

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <StoreIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Anunx
            </Typography>

            <Link
              href={'/user/publish'}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Button color="inherit" variant="outlined">
                Anunciar e Vender
              </Button>
            </Link>

            <IconButton
              sx={{ display: 'flex', gap: 1, color: '#fff' }}
              onClick={(event) => setAnchorUserMenu(event.currentTarget)}
            >
              {avatarUrl ? (
                <Avatar src="https://github.com/davi1985.png" />
              ) : (
                <AccountCircle />
              )}

              <Typography variant="subtitle2" color="#fff">
                Davi Silva
              </Typography>
            </IconButton>

            <Menu
              open={Boolean(anchorUserMenu)}
              onClose={() => setAnchorUserMenu(null)}
              anchorEl={anchorUserMenu}
            >
              <Link href={'/user/dashboard'} style={{ textDecoration: 'none' }}>
                <MenuItem>Meus Anúncios</MenuItem>
              </Link>

              <Link href={'/user/publish'} style={{ textDecoration: 'none' }}>
                <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>

              <Divider sx={{ margin: '8px 0' }} />

              <Link href={'/logoff'} style={{ textDecoration: 'none' }}>
                <MenuItem>Sair</MenuItem>
              </Link>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
