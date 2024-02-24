import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SnackbarProvider } from "notistack";
import Router from "./router";  

function App() {
  return (
    <Suspense>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
        <SnackbarProvider
          maxSnack={7}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Router />
        </SnackbarProvider>
      </LocalizationProvider>
    </Suspense>
  );
}

export default App;
