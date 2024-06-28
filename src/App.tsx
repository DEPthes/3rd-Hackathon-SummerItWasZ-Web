import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContainer } from "./App.style";
import Main from "./pages/Main";
import Write from "./pages/Write";
import All from "./pages/All";
import Header from "./components/Header";
import Result from "./pages/Result";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Write />} />
          <Route path="/all" element={<All />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
