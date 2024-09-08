import usersService from '@/services/users';
import { useEffect, useRef, useState } from 'react';
import { useMutation } from 'react-query';

const COUNT_DOWN_SECONDS = 60;
const useResendEmailVerification = () => {
  const [countdown, setCountdown] = useState(COUNT_DOWN_SECONDS);
  const intervalId = useRef<NodeJS.Timeout>();

  const resendEmailVerification = useMutation({
    mutationFn: usersService.sendVerificationEmail,
    onSuccess: () => {
      setCountdown(COUNT_DOWN_SECONDS);
      intervalId.current = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(intervalId.current);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    },
  });

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  return { resendEmailVerification, countdown };
};

export default useResendEmailVerification;
