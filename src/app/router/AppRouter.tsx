import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CharacterPage, MainPage, NotFoundPage } from 'pages';
import { ROUTES } from 'shared/constants';

const router = createBrowserRouter([
  {
    path: ROUTES.mainPage,
    element: <MainPage />,
  },
  {
    path: ROUTES.characterPage,
    element: <CharacterPage />,
  },
  {
    path: ROUTES.notFoundPage,
    element: <NotFoundPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
