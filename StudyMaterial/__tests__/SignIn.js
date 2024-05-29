import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignIn from '../Jest/SignIn'; // Adjust the import path to the actual location of your SignIn component

test('it increments the count when the button is pressed', () => {
  const { getByTestId, getByText } = render(<SignIn />);
  
  const countText = getByText('count value 0');
  const button = getByTestId('OnPressForgetBtn');

  fireEvent.press(button);

  expect(countText).toHaveTextContent('count value 1');
});
