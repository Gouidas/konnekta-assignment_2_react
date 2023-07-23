import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Option from '../../../components/select/Option';

describe('Option component', () => {
  const mockFn = jest.fn();
  
  it('renders correctly', () => {
    const { container } = render(<Option value="Test" isSelected={false} onSelect={mockFn} />);
    expect(container.firstChild).toHaveClass('option');
  });

  it('renders the value prop', () => {
    render(<Option value="Test" isSelected={false} onSelect={mockFn} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('adds the selected class when isSelected is true', () => {
    const { container } = render(<Option value="Test" isSelected={true} onSelect={mockFn} />);
    expect(container.firstChild).toHaveClass('selected');
  });

  it('calls onSelect prop when clicked', () => {
    render(<Option value="Test" isSelected={false} onSelect={mockFn} />);
    fireEvent.click(screen.getByText('Test'));
    expect(mockFn).toHaveBeenCalled();
  });
});
