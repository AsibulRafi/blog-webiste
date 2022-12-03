import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Home from "./pages/Home";
import SinglePage from "./pages/SinglePage";
// Apollo Client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blogs/:id" exact element={<SinglePage />} />
          <Route path="/create" exact element={<Create />} />
        </Routes>
        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
