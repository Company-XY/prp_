import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

// Sample data for demonstration
const sampleBlogs = [
  { id: 1, title: "First Blog Post", content: "This is the content of the first blog post.", author: "John Doe", section: "Technology" },
  { id: 2, title: "Second Blog Post", content: "This is the content of the second blog post.", author: "Jane Doe", section: "Travel" },
  { id: 3, title: "Third Blog Post", content: "This is the content of the third blog post.", author: "Bob Smith", section: "Food" }
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(sampleBlogs);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        {/* Banner */}
        <h1 className="text-3xl font-bold">My Blog Dashboard</h1>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Blogs..."
          className="border border-gray-300 px-2 py-1 rounded mt-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Blog Cards */}
        {filteredBlogs.map(blog => (
          <div key={blog.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">Author: {blog.author}</p>
            <p className="text-gray-600 mb-2">Section: {blog.section}</p>
            <p className="text-gray-800">{blog.content.substring(0, 100)}...</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
