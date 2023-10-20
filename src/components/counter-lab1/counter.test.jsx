import { render, screen ,fireEvent} from '@testing-library/react';
import About from './About';

test('defult Counter value', () => {
    render(<About/>);
    const Counter = screen.getByText('10')
    expect(Counter).toBeInTheDocument();
});

test('should render increment button', () => {
    render(<About/>);
    const IncrementButton = screen.getByRole('button', {name:/Increment/i})
    expect(IncrementButton).toBeInTheDocument();
});

test('when we click  increment button the counter value should br increment', () => {
    render(<About/>);
    const Counter = screen.getByText('10')
    expect(Counter).toBeInTheDocument();
    expect(Counter).toHaveTextContent('10');
    const IncrementButton = screen.getByRole('button', {name:/Increment/i})
    fireEvent.click(IncrementButton)
    expect(Counter).toHaveTextContent('11');

  
});

test('should render decrement button', () => {
    render(<About/>);
    const decrementButton = screen.getByRole('button', {name:/Decrement/i})
    expect(decrementButton).toBeInTheDocument();
});

test('when we click decrement button the counter value should be decrement', () => {
    render(<About/>);
    const Counter = screen.getByText('10')
    expect(Counter).toBeInTheDocument();
    expect(Counter).toHaveTextContent('10');
    const decrementButton = screen.getByRole('button', {name:/Decrement/i})
    fireEvent.click(decrementButton)
    expect(Counter).toHaveTextContent('9');

  
});
