import { Box, Typography } from "@mui/material";
import React from "react";
import Logotype from "../../../assets/images/NR1TEAM.png";

function Greeting() {
  return (
    <Box sx={{ backgroundColor: "#EDE6E3" }}>
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          padding: "4rem",
          pt: "12rem",
          pb: "8rem",
        }}
      >
        <Box>
          <img src={Logotype} style={{ maxWidth: "100%", height: "auto" }} />
        </Box>

        <Typography variant="h4" sx={{ fontSize: "5vw" }}>
          For smart web designs
        </Typography>
      </Box>
    </Box>
  );
}

export default Greeting;