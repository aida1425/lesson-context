import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Add from "./components/Add/Add";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import List from "./components/List/List";

import ContactContextProvider from "./contexts/contactContext";

const App = () => {
  return (
    <ContactContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </ContactContextProvider>
  );
};

export default App;
