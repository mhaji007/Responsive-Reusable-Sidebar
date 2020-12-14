import React from "react";
import * as s from "./App.styles";

// Import components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";
  const sidebarHeader = "Reusable Sidebar";

const App = () => {
  const backgroundImage = "images/company.jpeg"
  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
      />
      <MainView/>
    </s.App>
  );
}

export default App;
