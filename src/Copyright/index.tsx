import React from "react";
import { Link, Typography, TypographyProps } from "@mui/material";

const Copyright: React.FC<TypographyProps> = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {"Copyright © "}
    <Link color="inherit" href="https://www.ambienteseeng.com">
      Ambiente-se
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

export default Copyright;
