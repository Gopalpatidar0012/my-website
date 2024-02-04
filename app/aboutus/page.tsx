import About from '@/components/CBAboutUs';
import Footer from '@/components/Footer';
import React from 'react';

const page = () => {
  return (
    <div>
      <About />
      <footer role='contentinfo' aria-label='footer' id='cb-footer'>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
