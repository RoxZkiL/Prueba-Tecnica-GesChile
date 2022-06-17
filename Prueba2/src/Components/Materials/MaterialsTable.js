import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td": {
    border: 0,
  },
}));

function createData(item1, item2, item3) {
  return { item1, item2, item3 };
}

const rows = [
  createData("Item 1", "Item 1"),
  createData("Item 2", "Item 2"),
  createData("Item 3", "Item 3"),
];

export default function MateriaslTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ bgcolor: "#263238", mx: "auto", width: 470 }}
    >
      <Table sx={{ width: "100%" }}>
        <TableHead
          sx={{ bgcolor: "background.paper", mx: "auto", width: "100%" }}
        >
          <TableRow>
            <StyledTableCell
              sx={{
                bgcolor: "#263238",
                fontFamily: "monospace",
                fontWeight: 900,
                color: "#e3f2fd",
                textDecoration: "none",
                fontSize: 18,
              }}
              align="center"
            >
              Serie
            </StyledTableCell>
            <StyledTableCell
              sx={{
                bgcolor: "#263238",
                fontFamily: "monospace",
                fontWeight: 900,
                color: "#e3f2fd",
                textDecoration: "none",
                fontSize: 18,
              }}
              align="center"
            >
              Descripción
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                sx={{
                  bgcolor: "#263238",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "#e3f2fd",
                  textDecoration: "none",
                }}
                align="center"
              >
                {row.item1}
              </StyledTableCell>
              <StyledTableCell
                key={row.name}
                sx={{
                  bgcolor: "#263238",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: "#e3f2fd",
                  textDecoration: "none",
                }}
                align="center"
              >
                {row.item2}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
