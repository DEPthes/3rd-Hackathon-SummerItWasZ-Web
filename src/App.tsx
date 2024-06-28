import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer } from "./App.style";
import Main from "./pages/Main";
import Writes from "./pages/Writes";
import All from "./pages/All";
import Header from "./components/Header";
import Result from "./pages/Result";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Writes />} />
          <Route path="/all" element={<All />} />
          <Route path="/all/:id/:code" element={<Detail />} />
          <Route path="/result/:id/:code" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
