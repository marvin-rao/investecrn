import {useEffect, useState} from 'react';
import EmulatorNoticeModule from '../components/EmulatorNoticeModule';

export const useIsEmulatorNotice = () => {
  const [isEmulator, setIsEmulator] = useState(false);
  // Call the native module method to check the emulator/simulator
  useEffect(() => {
    if (!EmulatorNoticeModule) {
      return;
    }
    EmulatorNoticeModule.isEmulator()
      .then((emulator: any) => {
        if (emulator) {
          setIsEmulator(true);
          return;
        }
        setIsEmulator(false);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  return {
    isEmulator,
  };
};
