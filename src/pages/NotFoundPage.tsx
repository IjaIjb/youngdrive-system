// src/pages/NotFoundPage.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found | Youngdrive";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-primary">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">Page Not Found</h1>
          <p className="text-gray-600 text-lg mt-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to="/" variant="primary" className="flex items-center justify-center">
            <FaHome className="mr-2" /> Back to Home
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="outline-primary"
            className="flex items-center justify-center"
          >
            <FaArrowLeft className="mr-2" /> Go Back
          </Button>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-600 mb-4">
            You might want to check out these pages:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/about" className="text-primary hover:underline">About Us</Link>
            <Link to="/initiatives" className="text-primary hover:underline">Initiatives</Link>
            <Link to="/projects" className="text-primary hover:underline">Projects</Link>
            <Link to="/stories" className="text-primary hover:underline">Stories</Link>
            <Link to="/get-involved" className="text-primary hover:underline">Get Involved</Link>
            <Link to="/contact" className="text-primary hover:underline">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;