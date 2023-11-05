import React from "react";
import Header from "./components/Header/index.jsx";
import Nav from "./components/Nav/Nav.jsx";
import HomePages from "./pages/HomePages/HomePages.jsx";
import "./App.css";

function App() {
  const [checkedNavMenu, setCheckedNavMenu] = React.useState(false);
  const onCheckedNavMenu = (checked) => {
    setCheckedNavMenu(checked);
  };
  return (
    <div className="App">
      <Header handlerCheckedNavMenu={onCheckedNavMenu} />
      <div>
        <HomePages />
      </div>

      <Nav
        handlerCheckedNavMenu={onCheckedNavMenu}
        checkedNavMenu={checkedNavMenu}
      />
    </div>
  );
}

export default App;
