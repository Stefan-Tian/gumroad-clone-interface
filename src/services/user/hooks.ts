import { checkAuthenticated } from '@/lib/user';
import { AppRoute } from '@/router/constant';
import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import userService, { userQueryKeys } from './index';

export const useCurrentUser = () => {
  const isAuthenticated = checkAuthenticated();
  const { data, isLoading } = useQuery(
    userQueryKeys.getUser,
    userService.getUser,
    {
      enabled: isAuthenticated,
      refetchOnWindowFocus: false,
    }
  );

  const user = data?.user ?? null;

  return { user, isLoading };
};

export const useLogin = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationFn: userService.login,
    onSuccess: (response) => {
      localStorage.setItem('token', response.jwt);
      if (!response.user.emailVerified) {
        navigate(AppRoute.VerifyEmail);
      } else {
        navigate(AppRoute.Home);
      }
    },
  });

  return login;
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    queryClient.invalidateQueries(userQueryKeys.getUser);
    navigate(AppRoute.Home);
  };

  return { logout };
};

export const useRegister = () => {
  const navigate = useNavigate();

  const register = useMutation({
    mutationFn: userService.register,
    onSuccess: (response) => {
      localStorage.setItem('token', response.jwt);
      navigate(AppRoute.VerifyEmail);
    },
  });

  return register;
};

const COUNT_DOWN_SECONDS = 60;
export const useResendEmailVerification = () => {
  const [countdown, setCountdown] = useState(COUNT_DOWN_SECONDS);
  const intervalId = useRef<NodeJS.Timeout>();

  const resendEmailVerification = useMutation({
    mutationFn: userService.sendVerificationEmail,
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

export const useVerifyEmailToken = () => {
  const verifyEmailToken = useMutation((token: string) =>
    userService.verifyEmail(token)
  );

  return verifyEmailToken;
};
