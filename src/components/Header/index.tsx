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
import { signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [anchorUserMenu, setAnchorUserMenu] = useState<HTMLElement | null>(
    null
  );
  const [session] = useSession();

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
              href={session ? '/user/publish' : '/auth/signin'}
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <Button color="inherit" variant="outlined">
                Anunciar e Vender
              </Button>
            </Link>

            {session ? (
              <IconButton
                sx={{ display: 'flex', gap: 1, color: '#fff' }}
                onClick={(event) => setAnchorUserMenu(event.currentTarget)}
              >
                {session.user?.image ? (
                  <Avatar src={session.user?.image} />
                ) : (
                  <AccountCircle />
                )}

                <Typography variant="subtitle2" color="#fff">
                  {session.user?.name}
                </Typography>
              </IconButton>
            ) : null}

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

              <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                Sair
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
