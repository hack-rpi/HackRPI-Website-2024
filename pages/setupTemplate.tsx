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

function Tags() {
  // Sample tags
  const tags = ["Tag 1", "Tag 2", "Tag 3"];

  return (
    <div className="mb-4">
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-2 font-sans text-gray-100">Tags:</h2>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <div key={index} className="mr-2 mb-2">
              <div className="inline-block bg-gray-800 text-gray-100 px-3 py-1 rounded-md font-sans">
                {tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen font-sans">
      <NavBar showOnScroll={false} />
      <br/><br/><br/>

      {/* Image - Add your picture here */}
      <div className="mb-4">
        <img src="your-image-url.jpg" alt="Your Image" className="mx-auto" style={{ maxWidth: "300px" }} />
        {/* Add a comment to inform users to add their picture here */}
        <p className="text-gray-100 text-sm">Add your picture here</p>
      </div>

      {/* Page Title */}
      <br></br>
      <h1 className="text-3xl font-bold mb-2 font-sans" style={{ background: 'linear-gradient(to right, #2563EB, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Page Title Here</h1>

       {/* Name and Date */}
       <div className="text-center text-gray-500 mb-4 font-sans" style={{ background: 'linear-gradient(to right, #2563EB, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        <p className="text-gray-100">John Doe - April 2, 2024</p>
      </div>

      {/* Tags */}
      <div className="mb-4">
        <Tags />
      </div>

      {/* Page Content */}
      <p className="mb-4 font-sans text-gray-100">Provide a brief introduction to the purpose of your page here</p>
      
      {/* Sections */}
      <div className="text-left mb-4">
        <div>
          <h2 className="text-xl font-bold mb-2 font-sans" style={{ background: 'linear-gradient(to right, #2563EB, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Installing Stuff</h2>
          <p className="mb-4 font-sans text-gray-100">Provide a list of all tools that will need to be installed</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 font-sans" style={{ background: 'linear-gradient(to right, #2563EB, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Section Title</h2>
          <p className="mb-4 font-sans text-gray-100">Section content goes here. You can add more sections following similar structure.</p>
        </div>
      </div>
      
      {/* Add more sections following similar structure */}
      
      {/* Back to top link */}
      <BackToTop />
      
      {/* Footer */}
      <footer className="text-sm text-gray-500 font-sans">Made with ❤️ by [Your Name] © [Year] [Your Name]</footer>
      <Footer/>
    </div>
  );
}

export default App;