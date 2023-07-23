import React from 'react';
import { render, screen } from '@testing-library/react';
import NoData from '../../../components/select/NoData';

describe('NoData component', () => {
  it('renders empty folder image', () => {
    render(<NoData />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'test-file-stub');
    expect(img).toHaveAttribute('alt', 'Empty Folder');
  });
});
