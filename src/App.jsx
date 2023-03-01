import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'utils/routes';
import { Layout } from 'layout';
import './App.scss';
import { LayoutPage, CurrentNeedsPage, SuccessfulStoriesPage, OurTeams, Contacts, DocumentPage } from './components';


const HistoryPage = lazy(() => import('./pages/HistoryPage/HistoryPage'));
const { REACT_APP_MY_ENV, NODE_ENV } = process.env;
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const API_URL =
  NODE_ENV === 'production' ? window.API_URL : process.env.REACT_APP_API_URL;


export const App = () => {
  return (
    <><div>
      <ul>
        <li>My env: {REACT_APP_MY_ENV}</li>
        <li>API: {API_URL}</li>
      </ul>
    </div>
    <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<LayoutPage />} />
          <Route path={routes.HISTORY} element={<HistoryPage />} />
          <Route path={routes.CURRENT} element={<CurrentNeedsPage />} />
          <Route path={routes.SUCCESS} element={<SuccessfulStoriesPage />} />
          <Route path={routes.TEAM} element={<OurTeams />} />
          <Route path={routes.CONTACTS} element={<Contacts />} />
          <Route path={routes.DOCS} element={<DocumentPage />} />
          <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes></>
  );
};
