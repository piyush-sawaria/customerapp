import { Component } from "react";

export default class CustomerRow extends Component {
    render() {
        let {id, firstName, lastName} = this.props.customer;
        return <div className="row">
            {firstName}, {lastName}
            <button onClick={() => this.deleteCustomerRow(id)}>Delete</button>
        </div>
    }

    deleteCustomerRow(id) {
        this.props.delEvent(id)
    }
}
