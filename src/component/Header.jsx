import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header() {
  return (
    <div className="Header-component">
      <IconButton>
        <MenuIcon
          sx={{
            color: "#000",
          }}
        />
      </IconButton>
      <IconButton>
        {" "}
        <Typography color={"#ff6100"}>Logo</Typography>
      </IconButton>
      <Grid>
        <SearchIcon />
        <NotificationsIcon
          sx={{
            padding: "0rem 1rem ",
          }}
        />
      </Grid>
    </div>
  );
}
