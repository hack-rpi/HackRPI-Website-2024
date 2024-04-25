import React from 'react';
import "../app/globals.css";
import NavBar from "@/components/nav-bar/nav-bar";
import Footer from "@/components/footer";

function BackToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <p className="text-lg font-bold text-blue-400 mt-8 cursor-pointer" onClick={handleScrollToTop}>
      Back to top
    </p>
  );
}

function App() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center h-screen">
      <NavBar showOnScroll={false} />
      <br/><br/><br/>

      {/* Image */}
      <div className="mb-4">
        <img src="your-image-url.jpg" className="mx-auto" style={{ maxWidth: "300px" }} /> {/* Adjust max-width as needed */}
      </div>
      
      {/* Page Title */}
      <br></br>
      <h1 className="text-3xl font-bold mb-2">Your Page Title Here</h1>
      
      {/* Name and Date */}
      <div className="text-center text-gray-500 mb-4">
        <p>John Doe - April 2, 2024</p>
      </div>
      
      {/* Tags */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Tags:</h2>
        <ul className="list-disc list-inside">
          {/* Replace these with your own tags */}
          <li>Tag 1</li>
          <li>Tag 2</li>
          <li>Tag 3</li>
        </ul>
      </div>
      
      {/* Page Content */}
      <p className="mb-4">Your page content goes here. You can add paragraphs, lists, headings, etc. as needed.</p>
      
      {/* Section Title */}
      <h2 className="text-xl font-bold mb-2">Section Title</h2>
      
      {/* Section Content */}
      <p className="mb-4">Section content goes here. You can add more sections following similar structure.</p>
      
      {/* Add more sections following similar structure */}
      
      {/* Back to top link */}
      <BackToTop />
      
      {/* Footer */}
      <footer className="text-sm text-gray-500">Made with ❤️ by [Your Name] © [Year] [Your Name]</footer>
      <Footer/>
    </div>
  );
}

export default App;

