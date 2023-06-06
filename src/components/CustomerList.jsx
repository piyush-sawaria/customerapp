import { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

export default class CustomerList extends Component {
    state = {
        "customers": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }]
    }

    render() {
        return <div>
            <Filter />
            {this.state.customers.map(customer => 
                <CustomerRow 
                    key={customer.id}
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={customer}
                />
            )}
        </div>
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // reconcillation
        // this.state.customers = custs => won't trigger reconcillation
        // async function to update state and trigger reconcillation
        this.setState({
            customers: custs
        }, () => console.log("deleted!!!"))
    }
}
