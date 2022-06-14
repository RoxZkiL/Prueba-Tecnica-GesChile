import * as React from "react";
import { Typography } from "@mui/material";

export default function AcknowledgmentText() {
  return (
    <Typography
      sx={{
        fontFamily: "BlinkMacSystemFont",
        fontWeight: 800,
        color: "#ffffff",
        pb: "10%",
        fontSize: 20,
      }}
    >
      <h1>
        Gracias por ponerte en contacto con nosotros. En breve un ejecutivo
        comercial tomara contacto contigo
      </h1>
    </Typography>
  );
}
