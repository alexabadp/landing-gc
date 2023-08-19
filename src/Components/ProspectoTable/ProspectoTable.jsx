import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination"; // Importar TablePagination
import Paper from "@mui/material/Paper";

import InsertLinkIcon from "@mui/icons-material/InsertLink";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Box } from "@mui/material";

import background from "../../assets/background.png";
import CopyText from "../CopyText/CopyText";

export default function ProspectoTable({ dataTable }) {
  const [page, setPage] = React.useState(0); // Estado para el número de página actual
  const [rowsPerPage, setRowsPerPage] = React.useState(5); // Estado para el número de filas por página

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Regresar a la primera página cuando se cambie el número de filas por página
  };

  return (
    <>
      {dataTable.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={{ background: "#898585", borderRadius: "20px" }}
        >
          <Table
            sx={{ minWidth: 650, background: "#494747" }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Nombre
                </TableCell>
                {/* <TableCell align="center" sx={{ color: "#fff" }}>
                  Fecha
                </TableCell> */}
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Copiar Link
                </TableCell>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Ver clase asociada
                </TableCell>
                <TableCell align="center" sx={{ color: "#fff" }}>
                  Descargar
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataTable
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Filtrar las filas que se muestran según la página actual y el número de filas por página
                .map((row) => (
                  <TableRow
                    key={row.idprospecto}
                    sx={{
                      "& th, td": {
                        color: "#fff",
                      },
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {row.nombre_prospecto}
                    </TableCell>
                    {/* <TableCell align="center">{row.fecha}</TableCell> */}

                    <TableCell align="center">
                      <CopyText text={row.url_prospecto}>
                        <InsertLinkIcon sx={{ color: "#fff" }} />
                      </CopyText>
                    </TableCell>

                    <TableCell align="center">
                      <a
                        href={row.url_clase_relacionada}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SlideshowIcon sx={{ color: "#fff" }} />
                      </a>
                    </TableCell>
                    <TableCell align="center">
                      <a
                        href={row.url_prospecto}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FileDownloadIcon sx={{ color: "#fff" }} />
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            sx={{ color: "#fff", background: "#898585" }}
            rowsPerPageOptions={[5, 10, 25]} // Opciones de tamaño de página que deseas ofrecer
            component="div"
            count={dataTable.length} // Total de filas en la tabla
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      ) : (
        <Box sx={{ width: " 100%", gridColumn: "-1 / 1" }}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/grupo-ciencias.appspot.com/o/Biblioteca%20GC%2FVideoClases%2Fimagen%20de%20espera%20para%20busqueda-100.jpg?alt=media&token=00399c75-62a5-44a9-8356-4684e18ebe3b"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          />
        </Box>
      )}
    </>
  );
}
