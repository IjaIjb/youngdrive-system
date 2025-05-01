import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const InitiativesPage = lazy(() => import('./pages/InitiativesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const StoriesPage = lazy(() => import('./pages/StoriesPage'));
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading component for suspense fallback
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-primary border-solid rounded-full border-t-transparent animate-spin"></div>
  </div>
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/about',
    element: (
      <Suspense fallback={<Loader />}>
        <AboutPage />
      </Suspense>
    ),
  },
  {
    path: '/initiatives',
    element: (
      <Suspense fallback={<Loader />}>
        <InitiativesPage />
      </Suspense>
    ),
  },
  {
    path: '/projects',
    element: (
      <Suspense fallback={<Loader />}>
        <ProjectsPage />
      </Suspense>
    ),
  },
  {
    path: '/stories',
    element: (
      <Suspense fallback={<Loader />}>
        <StoriesPage />
      </Suspense>
    ),
  },
  {
    path: '/get-involved',
    element: (
      <Suspense fallback={<Loader />}>
        <GetInvolvedPage />
      </Suspense>
    ),
  },
  {
    path: '/resources',
    element: (
      <Suspense fallback={<Loader />}>
        <ResourcesPage />
      </Suspense>
    ),
  },
  {
    path: '/blog',
    element: (
      <Suspense fallback={<Loader />}>
        <BlogPage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loader />}>
        <NotFoundPage />
      </Suspense>
    ),
  },
];

export default routes;