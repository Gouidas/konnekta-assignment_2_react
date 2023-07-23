import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectInput from '../../../components/select/SelectInput';
import useInputChange from '../../../lib/hooks/useInputChange';

// Mock the module
jest.mock('../../../lib/hooks/useInputChange');

const handleInputChangeMock = jest.fn();

beforeEach(() => {
  // This function runs before each test, resetting the implementation of useInputChange for each test
  (useInputChange as jest.Mock).mockImplementation(() => ({
    inputValue: '',
    handleInputChange: handleInputChangeMock,
  }));
});

describe('SelectInput', () => {
  const setIsOpen = jest.fn();
  const setFilter = jest.fn();

  it('renders without crashing', () => {
    render(<SelectInput setIsOpen={setIsOpen} isOpen={true} placeholder="Select..." error={false} setFilter={setFilter} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('handles input change correctly', () => {
    render(<SelectInput setIsOpen={setIsOpen} isOpen={true} placeholder="Select..." error={false} setFilter={setFilter} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleInputChangeMock).toHaveBeenCalledTimes(1);
  });

  it('handles click correctly', () => {
    render(<SelectInput setIsOpen={setIsOpen} isOpen={false} placeholder="Select..." error={false} setFilter={setFilter} />);
    const container = screen.getByText('Select...');
    fireEvent.click(container);
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });
});
