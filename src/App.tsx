import { RouterProvider } from 'react-router-dom';
import browserRouter from './router';

const App = () => {
  return <RouterProvider router={browserRouter} />;
};

export default App;
