import { AppBar, Toolbar } from "@mui/material";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <AppBar position="static">
        <Toolbar>License Management</Toolbar>
      </AppBar>
      {children}
    </section>
  );
};

export default layout;
