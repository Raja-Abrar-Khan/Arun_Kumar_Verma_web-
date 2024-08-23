import React, { useState } from "react";
import publicationpng from "../../Images/ADDPublication.png";

function Profile() {
  const [activeForm, setActiveForm] = useState(null);

  const handleFormClose = () => {
    setActiveForm(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col sm:flex-row">
      {/* Left side: Profile Information */}
      <div className="w-full sm:w-1/3 bg-white shadow-lg p-6 flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-gray-600 mb-4">john.doe@example.com</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Change Password
        </button>
      </div>

      {/* Right side: Menu Options and Forms */}
      <div className="w-full sm:w-2/3 bg-white shadow-lg p-6 mt-6 sm:mt-0 sm:ml-6">
        {activeForm === null && (
          <div>
            <h3 className="flex items-center justify-center text-2xl font-bold text-gray-800 mb-4">Menu</h3>
            <ul className="flex flex-col items-center justify-center space-y-6">
              <img
                src={publicationpng}
                alt="Profile"
                className="h-40 w-2/3 bg-white shadow-lg hover:bg-black hover:ring-2 hover:ring-black rounded-lg cursor-pointer transition"
                onClick={() => setActiveForm("publications")}
              />

              <img
                src={publicationpng}
                alt="Profile"
                className="h-40 w-2/3 bg-white shadow-lg hover:bg-black hover:ring-2 hover:ring-black rounded-lg cursor-pointer transition"
                onClick={() => setActiveForm("blog")}
              />
              <img
                src={publicationpng}
                alt="Profile"
                className="h-40 w-2/3 bg-white shadow-lg hover:bg-black hover:ring-2 hover:ring-black rounded-lg cursor-pointer transition"
                onClick={() => setActiveForm("intern")}
              />
            </ul>
          </div>
        )}

        {/* Add Publications Form */}
        {activeForm === "publications" && (
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Add Publications
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 transition"
                onClick={handleFormClose}
              >
                &#10005;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Photo</label>
                <input
                  type="file"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter the title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Short Description</label>
                <textarea
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter a short description"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Long Description</label>
                <textarea
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter a long description"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Add Blog Form */}
        {activeForm === "blog" && (
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Add Blog
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 transition"
                onClick={handleFormClose}
              >
                &#10005;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Photo</label>
                <input
                  type="file"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Title</label>
                <input
                  type="text"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter the title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Long Description</label>
                <textarea
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter a long description"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Add Intern Form */}
        {activeForm === "intern" && (
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Add Intern
              </h3>
              <button
                className="text-gray-500 hover:text-gray-700 transition"
                onClick={handleFormClose}
              >
                &#10005;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Photo</label>
                <input
                  type="file"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter the intern's name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Describe the intern"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
