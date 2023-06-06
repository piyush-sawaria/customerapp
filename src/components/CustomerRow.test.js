import { fireEvent, render, screen } from '@testing-library/react';
import CustomerRow from './CustomerRow';
// unit testing in isolation

describe("testing customer row component", () => {
    let callback = jest.fn(); // mock function

    let c = {
        id: 52,
        firstName : 'Gavin',
        lastName : 'King'
    };

    it("render <CustomerRow />", () => {
        render(<CustomerRow
            key={c.id}
            delEvent={(id) => callback(id)}
            customer={c} />);

            let elem = screen.getByText(/Gavin/i);
            expect(elem).toBeInTheDocument();
    });

    it("delete a customer from <CustomerRow />", () => {
        render(<CustomerRow
            key={c.id}
            delEvent={(id) => callback(id)}
            customer={c} />);

        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(52);
    });
});
