import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SelectOptions from '../../../components/select/SelectOptions';

describe('SelectOptions', () => {
  const handleSelectMock = jest.fn();
  const defaultProps = {
    values: ['Option1', 'Option2'],
    selectedValues: [],
    handleSelect: handleSelectMock,
    filter: '',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display NoData component if no values are passed', () => {
    render(<SelectOptions {...defaultProps} values={[]} />);
    expect(screen.queryByText('No data')).toBeInTheDocument();
  });

  it('should correctly render passed options', () => {
    render(<SelectOptions {...defaultProps} />);
    defaultProps.values.forEach(value => {
      expect(screen.getAllByText(value)).toHaveLength(1);
    });
  });

  it('should call handleSelect with the correct argument when an option is clicked', () => {
    render(<SelectOptions {...defaultProps} />);
    fireEvent.click(screen.getByText(defaultProps.values[0]));
    expect(handleSelectMock).toHaveBeenCalledWith(defaultProps.values[0]);
  });
});
