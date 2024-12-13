"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useRouter, usePathname } from "next/navigation";
import { appRoute } from "@/constants/routes";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current URL path

  // Map URLs to their corresponding index
  const pathToIndex: any = {
    [appRoute.serielKeys]: 0,
    [appRoute.organization]: 1,
  };

  // Determine the selected index based on the current path, default to null
  const [selectedIndex, setSelectedIndex] = React.useState(() => {
    return pathToIndex[pathname] ?? null; // If path not in map, no tab is selected
  });

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    path: string
  ) => {
    setSelectedIndex(index); // Update state
    router.push(path); // Navigate to the corresponding page
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "#1e293b", // Dark blue background
        color: "#fff", // White text color
        padding: 2,
      }}
    >
      {/* User Info */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar sx={{ bgcolor: "#4f46e5", mr: 2 }}>U</Avatar>
        <Typography variant="h6" noWrap>
          User Name
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.3)" }} />

      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) =>
            handleListItemClick(event, 0, appRoute.serielKeys)
          }
        >
          <ListItemIcon>
            <DraftsIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Serial Keys" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) =>
            handleListItemClick(event, 1, appRoute.organization)
          }
        >
          <ListItemIcon>
            <InboxIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Organization" />
        </ListItemButton>
      </List>
    </Box>
  );
}
