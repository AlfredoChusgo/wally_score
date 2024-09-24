"use client";
import Image from "next/image";
import styles from "./page.module.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Container from "@mui/material/Container/Container";
import wally_data from "./assets/wally_data";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 150,
    editable: false,
  },
  {
    field: 'ataque',
    headerName: 'Ataque',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'defensa',
    headerName: 'Defensa',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'salvada',
    headerName: 'Salvada',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'servida',
    headerName: 'Servida',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'teamplay',
    headerName: 'Teamplay',
    type: 'number',
    width: 110,
    editable: false,
  },
  {
    field: 'saque',
    headerName: 'Saque',
    type: 'number',
    width: 110,
    editable: false,
  },

  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  // }, 
];

const rows: JugadorHabilidades[] = wally_data.wallyInfo1;
const rows2: JugadorHabilidades[] = wally_data.wallyInfo2;


export default function Home() {
  return (
    <Container >
      <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          pageSizeOptions={[5]}
          // checkboxSelection
          disableRowSelectionOnClick
        />
    </Container>
  );
}