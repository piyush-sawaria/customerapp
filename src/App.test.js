import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// one file is one test suite ==> no need for describe()
// test() is same as it() for test spec
test('renders title', () => {
  render(<App />); // no UI component only HTML in-memory DOM
  const h1Element = screen.getByText(/Customer application/i);
  expect(h1Element).toBeInTheDocument();
});

// test spec
it("renders customers", () => {
  // render(<App />);
  // let btns = screen.findAllByRole('button'); 
  // expect(btns.length).toBe(6);

  // container is giving low-level DOM api access
  let { container } = render(<App />);
  let btns = container.querySelectorAll('button');
  expect(btns.length).toBe(6);
});

it("delete a customer", () => {
  render(<App />);
  let btns = screen.getAllByRole('button');
  fireEvent.click(btns[3]);
  btns = screen.getAllByRole('button');
  expect(btns.length).toBe(5);

  const divElement = screen.queryByText(/Monica/i);
  expect(divElement).toBeNull();
});


it("delete a customer",  () => {
  let {container} = render(<App />);
  let txtBox = screen.getByPlaceholderText("search by name");
  fireEvent.change(txtBox, {"target": {"value": "Geller"}});
  // screen.debug();
  let rows = container.querySelectorAll('.row');
  expect(rows.length).toBe(2);
});
