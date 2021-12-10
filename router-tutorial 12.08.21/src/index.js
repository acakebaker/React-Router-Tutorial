import './main.css';
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Error404 from "./routes/Error404";

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route 
            index 
            element={
              <main style={{ padding: "1rem" }}>
                <h3>Select an invoice.</h3>
              </main>
            } 
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<Error404 />}
        />
      </Route>
    </Routes>
  </Router>,
  rootElement
);