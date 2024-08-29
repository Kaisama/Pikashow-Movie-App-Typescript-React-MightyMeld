import { Box } from "@mui/material";
import { Children, ReactNode } from "react";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layouts = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#10141F",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        color: "white",
        gap: 3,
        padding: 3,
        overflowY: "hidden",
        height: "100vh",
      }}
    >
      <Sidebar />
      <Box
        sx={{
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layouts;
