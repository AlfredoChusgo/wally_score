"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Container from "@mui/material/Container/Container";
import wally_data from "./assets/wally_data";
import Tabs from "@mui/material/Tabs/Tabs";
import Tab from "@mui/material/Tab/Tab";
import { JugadorHabilidades } from "./model/jugador";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 150,
    editable: false,
  },
  {
    field: "ataque",
    headerName: "Ataque",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "defensa",
    headerName: "Defensa",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "salvada",
    headerName: "Salvada",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "servida",
    headerName: "Servida",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "teamplay",
    headerName: "Teamplay",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "saque",
    headerName: "Saque",
    type: "number",
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

function getGrid(rows1:JugadorHabilidades[]){
  return (      <DataGrid
    rows={rows1}
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
  />);
}
export default function Home() {
  return BasicTabs();
  return (
    <Container>
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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Mayo 2024" {...a11yProps(0)} />
            <Tab label="Septiembre 2024" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        {getGrid(rows)}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        {getGrid(rows2)}
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
