import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '@/components/Button';
import { ButtonVariant } from '../../types/index';

// Mock the FontAwesomeIcon component
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

describe('Button Component', () => {
  it('renders a button with the provided title', () => {
    render(
      <Button
        onClick={() => {}}
        title='Get connected'
        variant={ButtonVariant.PRIMARY}
      />
    );

    const buttonTitle = screen.getByText('Get connected');
    expect(buttonTitle).toBeInTheDocument();
  });

  it('executes the onClick function when the button is clicked', () => {
    const onClickMock = jest.fn();
    render(
      <Button
        variant={ButtonVariant.PRIMARY}
        title='Click Me'
        onClick={onClickMock}
      />
    );

    const button = screen.getByText('Click Me');

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
