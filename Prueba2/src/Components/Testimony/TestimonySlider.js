import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Juan Viera",
    description: `Desde que empezamos a utilizar el software, hemos logrado posicionarnos
    en el mercado y generar una ventaja competitiva gracias a la rapidez y
    eficiencia que nos entrega este software a la hora de evaluar y presupuestar nuevos proyectos.`,
    imgPath: "https://i.ibb.co/J3YtRgC/pexels-andrea-piacquadio-927022.jpg",
    puesto: "GesChile, S.p.A.",
    empresa: "Tech Lead",
  },
  {
    label: "Jesus Matute",
    description: `Este software es increible, nos ha ayudado enormemente con el crecimiento de nuestra empresa.`,
    imgPath: "https://i.ibb.co/kKLnmHL/pexels-buro-millennial-1438081.jpg",
    puesto: "Software Developer",
    empresa: "RoxZkiL, Inc.",
  },
  {
    label: "Vanessa Robles",
    description: `Desde que empezamos a utilizar el software, hemos logrado posicionarnos
    en el mercado y generar una ventaja competitiva gracias a la rapidez y
    eficiencia del software.`,
    imgPath: "https://i.ibb.co/Nj5RQqM/pexels-andrea-piacquadio-826349.jpg",
    puesto: "Bussines Manager",
    empresa: "Meta, Corp.",
  },
  {
    label: "Francisco Perez",
    description: `Es un software muy rapido y eficiente, calzó perfectamente con nuestras exprectativas.`,
    imgPath: "https://i.ibb.co/QmJWstb/pexels-djordje-petrovic-2102415.jpg",
    puesto: "Sales Analit",
    empresa: "Costanera, S.p.A.",
  },
];

function TestimonySlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1, maxHeight: 800 }}>
      <Paper
        square
        elevation={2}
        sx={{
          display: "flex",
          height: 50,
          pl: 2,
          bgcolor: "#000000",
        }}
      >
        <Typography
          sx={{
            fontFamily: "monospace",
            fontWeight: 900,
            color: "#e3f2fd",
            textDecoration: "none",
            mx: "auto",
            pt: "2%",
            fontSize: 18,
          }}
        >
          {images[activeStep].label}
        </Typography>
      </Paper>
      <Typography
        sx={{
          bgcolor: "#263238",
          fontFamily: "monospace",
          fontWeight: 900,
          color: "#e3f2fd",
          textDecoration: "none",
        }}
      >
        {images[activeStep].description}
      </Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: 900,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Typography
        sx={{
          bgcolor: "#000000",
          fontFamily: "monospace",
          fontWeight: 900,
          color: "#e3f2fd",
          textDecoration: "none",
        }}
      >
        {images[activeStep].puesto}
      </Typography>
      <Typography
        sx={{
          bgcolor: "#000000",
          fontFamily: "monospace",
          fontWeight: 900,
          color: "#e3f2fd",
          textDecoration: "none",
        }}
      >
        {images[activeStep].empresa}
      </Typography>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default TestimonySlider;
