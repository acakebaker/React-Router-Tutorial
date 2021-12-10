import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div style={{ display: "flex" }}>
            <nav style={{
                borderRight: "solid 1px",
                padding: "1rem",
                height: "90vh",
            }}>
                <input 
                    className="searchBox"
                    placeholder="Search"
                    value={searchParams.get("search") || ""}
                    onChange={event => {
                        let search = event.target.value;
                        if (search) {
                            setSearchParams({ search });
                        } else {
                            setSearchParams({});
                        }
                    }}
                />
                {invoices.filter(invoice => {
                    let search = searchParams.get("search");
                    if (!search) return true;
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(search.toLowerCase());
                }).map(invoice => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block", 
                                margin: "1rem 0",
                                color: isActive ? "tomato" : ""
                            };
                        }}
                        to={`/invoices/${invoice.number}`}
                        key={invoice.number}
                    >
                        {invoice.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}