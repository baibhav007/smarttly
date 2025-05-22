import './App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Oval } from 'react-loader-spinner';

const RootLayout = lazy(() => import('./pages/root'));
const ErrorPage = lazy(() => import('./pages/Error'));
const Homepage = lazy(() => import('./pages/Home'));
const ServicePage = lazy(() => import('./pages/Services'));
const ContactPage = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetails'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetail'));
const CaseStudyDetailPage = lazy(() => import('./pages/CaseStudyDetails'));
const PrivacyPolicy = lazy(() => import('./Components/TermsandPolicy/PrivacyPolicy/PrivacyPolicy'));
const TermsandCondition = lazy(() => import('./Components/TermsandPolicy/TermsandCondition/TermsandCondition'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const Landing = lazy(() => import('./pages/Landing'));

const Loader = () => (
  <div className="loader-container" style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Oval visible={true} height={80} width={80} color="#4fa94d" ariaLabel="oval-loading" />
  </div>
);

// Suspense Wrapper for Cleaner Code
const withSuspense = (Component) => (
  <Suspense fallback={<Loader />}>
    <Component />
  </Suspense>
);

// Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(RootLayout),
    errorElement: withSuspense(ErrorPage),
    children: [
      // Redirect / to /home
      { index: true, element: <Navigate to="/home" replace /> },
      { path: 'home', element: withSuspense(Homepage) }, // Dedicated route for Homepage
      {
        path: 'services',
        children: [
          { index: true, element: withSuspense(ServicePage) },
          { path: ':serviceName', element: withSuspense(ServiceDetailPage) }
        ]
      },
      { path: 'service-overview', element: withSuspense(Landing) },
      { path: 'contact', element: withSuspense(ContactPage) },
      { path: 'PrivacyPolicy', element: withSuspense(PrivacyPolicy) },
      { path: 'TermsandCondition', element: withSuspense(TermsandCondition) },
      { path: 'ThankYou', element: withSuspense(ThankYou) },
      { path: 'about', element: withSuspense(About) },
      {
        path: 'blog',
        children: [
          { index: true, element: withSuspense(BlogPage) },
          { path: ':blogID', element: withSuspense(BlogDetailPage) }
        ]
      },
      {
        path: 'casestudies',
        children: [
          { index: true, element: withSuspense(CaseStudies) },
          { path: ':caseStudiesHeading', element: withSuspense(CaseStudyDetailPage) }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;