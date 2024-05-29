import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react-native';
import {act} from 'react-test-renderer';
import SignIn from '../Jest/SignIn';

const props = {
  navigation: {
    navigate: jest.fn(),
  },
  check:true
};
const props2 = {
    navigation: {
      navigate: jest.fn(),
    },
    check:false
  };
  

// jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon')
// jest.mock('react-native-keyboard-aware-scroll-view', () => {
//   const KeyboardAwareScrollView = ({ children }) => children;
//   return { KeyboardAwareScrollView };
// });
// jest.mock('react-native-linear-gradient', () => 'LinearGradient');
// jest.mock('react-native-text-gradient', () => 'LinearGradient');

// jest.mock('react-native-keychain', () => ({ SECURITY_LEVEL_ANY: 'MOCK_SECURITY_LEVEL_ANY', SECURITY_LEVEL_SECURE_SOFTWARE: 'MOCK_SECURITY_LEVEL_SECURE_SOFTWARE', SECURITY_LEVEL_SECURE_HARDWARE: 'MOCK_SECURITY_LEVEL_SECURE_HARDWARE', setGenericPassword: jest.fn().mockResolvedValue(), getGenericPassword: jest.fn().mockResolvedValue(), resetGenericPassword: jest.fn().mockResolvedValue(), getInternetCredentials: jest.fn().mockResolvedValue(true), getSupportedBiometryType: jest.fn().mockResolvedValue(true), setInternetCredentials: jest.fn().mockResolvedValue(true), }));

let isVisible = false;

// jest.mock("react-native-config", () => ({
//   __esModule: true,
//   default: () => ({
//     setDefaults: jest.fn(),
//   }),
// }));

const renderScreen = prop => render(<SignIn {...prop} />);

describe('this describes about the test cases for FeedBack View Model', () => {
  afterEach(cleanup);
  it('to check that the FeedBack View Model is getting rendered successfully', async () => {
    const renderScreenWithStoreResult = await renderScreen(props);
    expect(renderScreenWithStoreResult).toBeTruthy();
  });

  it('to check that the checkbox button', async () => {
    const renderScreenWithStoreResult = renderScreen(props);
    const button = await renderScreenWithStoreResult.findByTestId(
      'OnPressForgetBtn',
    );
    fireEvent.press(button);
    expect(renderScreenWithStoreResult).toBeTruthy();
  });
  // it('to check that the checkbox button2', async () => {
  //   const renderScreenWithStoreResult = renderScreen(props2);
  //   const button = await renderScreenWithStoreResult.findByTestId(
  //     'onPressBtn2',
  //   );
  //   fireEvent.press(button);
  //   expect(renderScreenWithStoreResult).toBeTruthy();
  // });
  // it('to check that the page is getting rendered successfully when press Pressable5', async () => {
  //   const renderScreenWithStoreResult = renderScreen(props);
  //   const button = await renderScreenWithStoreResult.findByTestId('input');
  //   fireEvent(button, 'onChangeText', 'test');
  //   expect(renderScreenWithStoreResult).toBeTruthy();
  // });


});
