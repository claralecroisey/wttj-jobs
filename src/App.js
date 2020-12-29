import "./App.css";
import { createTheme, WuiProvider } from "@welcome-ui/core";
import JobList from "./components/JobList";
import { WTTJ_THEME_CONFIG } from "./theme";

const theme = createTheme(WTTJ_THEME_CONFIG);

function App() {
  return (
    <WuiProvider theme={theme} hasGlobalStyle useReset>
      <JobList />
    </WuiProvider>
  );
}

export default App;
