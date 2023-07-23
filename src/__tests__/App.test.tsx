import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import Select from '../components/select';

jest.mock('../components/select', () => {
  return function DummySelect() {
    return (
      <div data-testid="select">Select</div>
    );
  };
});

describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('select')).toBeInTheDocument();
  });
});