import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectedItems from '../../../components/select/SelectedItems';

describe('SelectedItems component', () => {
  const selectedValues = ['Apple', 'Banana', 'Cherry'];

  it('renders correctly', () => {
    const { container } = render(<SelectedItems selectedValues={selectedValues} />);
    expect(container.firstChild).toHaveClass('selected-items');
  });

  it('renders the selectedValues prop', () => {
    render(<SelectedItems selectedValues={selectedValues} />);
    selectedValues.forEach(value => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('renders each value in a div with class selected-item', () => {
    const { container } = render(<SelectedItems selectedValues={selectedValues} />);
    const selectedItems = container.querySelectorAll('.selected-item');
    expect(selectedItems).toHaveLength(selectedValues.length);
  });
});
