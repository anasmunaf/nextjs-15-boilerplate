import Header from "@/component/Header";
import Sidebar from "@/component/Sidebar";
import { Box } from "@mui/material";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default layout;
