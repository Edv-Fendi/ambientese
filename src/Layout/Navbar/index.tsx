import React from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ListItem from "../listItems";
import { navLinks } from "../NavLink";

import { Drawer } from "./styles";

interface IProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Navbar: React.FC<IProps> = ({ isOpen, toggleDrawer }) => (
  <Drawer variant="permanent" open={isOpen}>
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: [1],
      }}
    >
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Ambiente-se
      </Typography>

      <IconButton onClick={toggleDrawer}>
        <ChevronLeftIcon />
      </IconButton>
    </Toolbar>
    <Divider />
    <List component="nav" sx={{ overflow: "auto", overflowX: "hidden" }}>
      {navLinks.map(({ title, links }, index) => (
        <React.Fragment key={index}>
          {index !== 0 ? <Divider sx={{ my: 1 }} /> : null}
          <ListItem title={title} itens={links} />
        </React.Fragment>
      ))}
    </List>
  </Drawer>
);

export default Navbar;
