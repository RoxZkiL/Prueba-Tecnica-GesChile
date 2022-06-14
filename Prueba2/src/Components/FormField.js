import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import styles from "./FormField.module.css";
import Typography from "@mui/material/Typography";

const FormField = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
  });

  function inputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    navigate("/agradecimiento");
  }
  return (
    <Box
      className={styles.form}
      component="form"
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "50ch",
          color: "white",
          display: "flex",
        },
      }}
      autoComplete="off"
      noValidate
      onSubmit={formSubmit}
    >
      <div>
        <Typography
          sx={{
            fontFamily: "BlinkMacSystemFont",
            fontWeight: 800,
            color: "#ffffff",
            pb: "10%",
            fontSize: 26,
          }}
        >
          <h2>Habla con nosotros sobre como impulsar tu negocio</h2>
        </Typography>

        <TextField
          sx={{
            "& > :not(style)": {
              m: 0.4,
              height: "8ch",
              color: "#ffffff",
            },
          }}
          type="text"
          variant="filled"
          id="outlined-required"
          label="Nombre"
          name="name"
          value={input.name}
          onChange={inputChange}
          style={{
            color: "#ffffff",
            backgroundColor: "#000000",
            fontSize: "16px",
            fontWeight: 500,
            opacity: 0.6,
          }}
        />

        <TextField
          sx={{
            "& > :not(style)": { m: 0.4, height: "8ch", color: "#ffffff" },
          }}
          type="text"
          variant="filled"
          id="outlined-required"
          label="Apellido"
          name="lastname"
          value={input.lastname}
          onChange={inputChange}
          style={{
            color: "#ffffff",
            backgroundColor: "#000000",
            fontSize: "16px",
            fontWeight: 500,
            opacity: 0.6,
          }}
        />

        <TextField
          sx={{
            "& > :not(style)": {
              m: 0.4,
              height: "8ch",
              color: "#ffffff",
            },
          }}
          type="text"
          variant="filled"
          id="outlined-required"
          label="Correo Electrónico"
          name="email"
          value={input.email}
          onChange={inputChange}
          style={{
            color: "#ffffff",
            backgroundColor: "#000000",
            fontSize: "16px",
            fontWeight: 500,
            opacity: 0.6,
          }}
        />

        <TextField
          sx={{
            "& > :not(style)": { m: 0.4, height: "8ch", color: "#ffffff" },
          }}
          type="text"
          variant="filled"
          id="outlined-required"
          label="Número Telefónico"
          name="phone"
          value={input.phone}
          onChange={inputChange}
          style={{
            color: "#ffffff",
            backgroundColor: "#000000",
            fontSize: "16px",
            fontWeight: 500,
            opacity: 0.6,
          }}
        />

        <TextField
          sx={{
            "& > :not(style)": { m: 0.4, height: "8ch", color: "#ffffff" },
          }}
          type="text"
          variant="filled"
          id="outlined-required"
          label="Nombre de la Empresa"
          name="company"
          value={input.company}
          onChange={inputChange}
          style={{
            color: "#ffffff",
            backgroundColor: "#000000",
            fontSize: "16px",
            fontWeight: 500,
            opacity: 0.6,
          }}
        />

        <div className={styles.createButton}>
          <Button
            disabled={
              input.name === "" ||
              input.lastname === "" ||
              input.email === "" ||
              input.phone === "" ||
              input.company === "" ||
              input.name === ""
                ? true
                : false
            }
            type="submit"
            variant="contained"
            style={{
              color: "#ffffff",
              backgroundColor: "#1a237e",
              fontSize: "16px",
              fontWeight: 500,
              fontFamily: "monospace",
            }}
          >
            Enviar
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default FormField;
