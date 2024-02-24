import React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export type IListItem = {
  label: string;
  href: string;
} & (
  | {
      icon: JSX.Element;
      hidden?: undefined;
    }
  | { icon?: JSX.Element; hidden: true }
);

interface IProps {
  title?: string;
  itens?: IListItem[];
}
const ListItem: React.FC<IProps> = ({ title, itens }) => (
  <React.Fragment>
    {title && (
      <ListSubheader component="div" inset>
        {title}
      </ListSubheader>
    )}
    {itens
      ?.filter(({ hidden }) => !hidden)
      .map(({ label, href, icon }) => {
        return (
          <Link
            key={label}
            to={href}
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={label} />
            </ListItemButton>
          </Link>
        );
      })}
  </React.Fragment>
);
export default ListItem;
