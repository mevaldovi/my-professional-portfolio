import React, { useState } from 'react';
import NavTabs from './Navigation';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  // if currentPage is Home, return that compenent.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio/>;
    }
    // if currentPage is About, return that compenent.
    if (currentPage === 'About') {
      return <About />;
    }
    // if currentPage is Blog, return that compenent.
    if (currentPage === 'Contact Me') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }

    return <About />;
  };

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
  );
}