"use client";
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import LogsIcon from "@mui/icons-material/History";
import { useRouter } from "next/navigation";
import { appRoute } from "@/constants/routes";

export default function Header() {
  const router = useRouter();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => router.push(appRoute.dashboard)}
        >
          License Management
        </Typography>
        <IconButton color="inherit" onClick={() => router.push("/logs")}>
          <LogsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
