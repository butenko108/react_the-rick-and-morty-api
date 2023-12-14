import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CharacterPage, MainPage, NotFoundPage } from 'pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:characterName',
    element: <CharacterPage />,
  },
  {
    path: '/404',
    element: <NotFoundPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
