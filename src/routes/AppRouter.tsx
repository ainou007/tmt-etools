import MainLayout from '@/layouts/MainLayout';
import AboutUs from '@/pages/about-us/AboutUs';
import EmailBuilder from '@/pages/email-builder/EmailBuilder';
import AboutValidator from '@/pages/email-validator/about-validator/AboutValidator';
import EmailValidator from '@/pages/email-validator/validation/EmailValidator';
import Home from '@/pages/home/Home';
import Settings from '@/pages/settings/Settings';
import TextEncoder from '@/pages/text-encoder/TextEncoder';
import TextTransform from '@/pages/text-transform/TextTransform';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'text-transform',
        element: <TextTransform />,
      },
      {
        path: 'text-encoder',
        element: <TextEncoder />,
      },
      {
        path: 'email-validator',
        // element: <EmailValidatorLayout />,
        children: [
          {
            index: true,
            element: <EmailValidator />,
          },
          {
            path: 'about',
            element: <AboutValidator />,
          },
        ],
      },
      {
        path: 'email-builder',
        element: <EmailBuilder />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },

  //   {
  //     path: '*',
  //     element: <PageNotFound />,
  //   },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
