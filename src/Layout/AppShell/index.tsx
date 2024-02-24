import React, { useCallback, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";

import { Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Copyright from "../../Copyright";
import Navbar from "../Navbar";
import { navLinks } from "../NavLink";

import { AppBar } from "./styles";

// junta os links de navegação para facilitar a busca
const flatNavLinks = navLinks.map(({ links }) => links).flat();

const AppShell: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  //Função para alternar o estado do (menu lateral)
  const toggleDrawer = useCallback(() => setOpen((state) => !state), []);

  // Encontra o título da página atual com base na URL
  const title =
    flatNavLinks.find(({ href }) => location.pathname.startsWith(href))
      ?.label || "Ambiente-se";

  return (
    <Box sx={{ display: "flex", maxHeight: "100vh" }}>
      <AppBar position="absolute" open={open}>
        <Toolbar sx={{ pr: "24px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={2}>
            <IconButton color="inherit">
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Navbar isOpen={open} toggleDrawer={toggleDrawer} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
};

export default AppShell;
