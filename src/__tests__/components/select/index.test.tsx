import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from '../../../components/select';
import { SelectProps } from '../../../lib/types';
import { useOutsideClick } from '../../../lib/hooks/useOutsideClick';


const mockValues = ['value1', 'value2', 'value3'];
const mockOnSelect = jest.fn();

const mockProps: SelectProps = {
  values: mockValues,
  onSelect: mockOnSelect,
  multiple: true,
  required: true,
  placeholder: 'test placeholder',
};

jest.mock('../../../lib/hooks/useHandleSelect', () => ({
  __esModule: true,
  default: () => ({
    handleSelect: mockOnSelect,
    selectedValues: ['value1'],
    isOpen: true,
    setIsOpen: jest.fn(),
  }),
}));

jest.mock('../../../lib/hooks/useOutsideClick', () => ({
  __esModule: true,
  useOutsideClick: jest.fn((_, callback) => callback()),
}));

describe('Select Component', () => {
  it('renders without crashing', () => {
    render(<Select {...mockProps} />);
  });

  it('renders SelectInput component', () => {
    render(<Select {...mockProps} />);
    if (mockProps.placeholder) {
      expect(screen.getByText(mockProps.placeholder)).toBeInTheDocument();
    }
  });

  it('renders SelectOptions component when isOpen is true', () => {
    render(<Select {...mockProps} />);
    mockValues.forEach(value => {
      const optionElements = screen.getAllByText(value);
      const optionElement = optionElements.find(el => el.closest('.options'));
      expect(optionElement).toBeInTheDocument();
    });
  });

  it('renders SelectedItems component with the correct props', () => {
    render(<Select {...mockProps} />);
    const value1Elements = screen.getAllByText('value1');
    const selectedItemElement = value1Elements.find(el => el.closest('.selected-items'));
    expect(selectedItemElement).toBeInTheDocument();
  });

  it('calls useOutsideClick when Select is rendered', () => {
    render(<Select {...mockProps} />);
    expect(useOutsideClick).toHaveBeenCalled();
  });

  it('applies error class when error is true', () => {
    const newMockProps = { ...mockProps, values: [] };
    render(<Select {...newMockProps} />);
    expect(screen.getByTestId('select-div').classList.contains('error')).toBe(true);
  });
});
