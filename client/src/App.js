import React from "react";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import MainLayout from "./components/layout/MainLayot";

import NotFound from "./components/pages/NotFoundPage";
import Home from "./components/pages/HomePage";
import ExcelComponentPage from "./components/pages/ExcelComponentPage";
import ImportPage from "./components/pages/ImportPage";
import ExportPage from "./components/pages/ExportPage";
import ExcelExportPage from "./components/pages/ExcelExportPage";

// Konfiguracja adresu URI naszego API i bufora.
const uri = process.env.API_URI;
const cache = new InMemoryCache();
// Konfiguracja klienta Apollo.
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true,
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainLayout>
        <div className="AppDisplay">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/excelcomponentpage"
              element={<ExcelComponentPage />}
            />
            <Route path="/importpage" element={<ImportPage />} />
            <Route path="/exportpage" element={<ExportPage />} />
            <Route path="/excelexportpage" element={<ExcelExportPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </MainLayout>
    </ApolloProvider>
  );
};

export default App;
