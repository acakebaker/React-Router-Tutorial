import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";
import "../main.css";

export default function Invoice() {
    let navigate = useNavigate();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));

    return (
        <main style={{ padding: "1rem" }}>
            <h1 style={{ 
                marginTop: "-5px", 
                marginBottom: "-5px",
                color: "tomato",
            }}>{invoice.name}</h1>
            <p><b>Total Due</b>: {invoice.amount}</p>
            <p><b>Year</b>: {invoice.number}</p>
            <p><b>Due Date</b>: {invoice.due}</p>
            <button
                className="deleteButton"
                onClick={() => {
                    deleteInvoice(invoice.number);
                    navigate("/invoices");
                }}
            >Delete Invoice</button>
        </main>
    );
}