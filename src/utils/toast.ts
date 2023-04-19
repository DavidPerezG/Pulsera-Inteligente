import Toast from 'react-native-toast-message';

const showToast = (messageOne: string, messageTwo: string) => {
    Toast.show({
      type: 'success',
      text1: messageOne,
      text2: messageTwo
    });
  }

export default showToast;