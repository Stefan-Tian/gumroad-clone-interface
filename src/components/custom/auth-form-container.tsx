import { Button } from '@/components/ui/button';
import { AppRoute } from '@/router/constant';
import { MdChevronLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AuthFormContainer = ({
  children,
  title,
  link,
  linkText,
}: {
  children: React.ReactNode;
  title: string;
  link: AppRoute;
  linkText: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-purple-800">
      <div className="space-y-4">
        <Link
          to={AppRoute.Home}
          className="text-center flex items-center gap-1 text-white"
        >
          <MdChevronLeft className="text-lg" />
          Return to Home
        </Link>
        <div className="flex flex-col w-96 border-2 border-gray-800 p-6 rounded-md bg-white">
          <div className="text-2xl font-bold mb-6">{title}</div>
          {children}
          <div className="flex flex-col">
            <Button type="submit">Confirm</Button>
            <Link to={link} className="mt-2 text-center">
              <Button variant="ghost">{linkText}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFormContainer;
