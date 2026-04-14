import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewFeedback from "../../assets/icons/icon-new-feedback.svg";

export default function AddFeedback() {
  const [formData, setFormData] = useState({
    title: "",
    category: "UI",
    suggestion: "",
  });

  const storeOneSuggestion = async (data) => {
    try {
      const response = await fetch("/api/add-one-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          category: data.category,
          suggestion: data.suggestion,
        }),
      });
      await response.text();
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  function handleSubmit(e) {
    e.preventDefault();
    storeOneSuggestion(formData);
    setFormData({
      title: "",
      category: "UI",
      suggestion: "",
    });
  }
  return (
    <div>
      <div className="flex mx-5">
        <div className="my-15 mx-5 flex-col mx-auto">
          <div className="mb-10">
            <Link to="/">
              <button className="text-lg font-bold text-gray-500 hover:cursor-pointer">
                ← Go Back
              </button>
            </Link>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white relative rounded-lg max-w-[600px]"
          >
            <div className="absolute left-10 -top-7">
              <img className="" src={NewFeedback} alt="plus sign" />
            </div>

            <div className="m-5 p-5 space-y-3">
              <h1 className="text-3xl font-bold text-gray-600 my-10">
                Create New Feedback
              </h1>
              <label htmlFor="title" className="text-lg font-bold">
                Feedback Title
              </label>
              <p>Add a short, descriptive headline</p>
              <input
                className="block w-full p-3 rounded-lg bg-gray-100"
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
              ></input>
              <label htmlFor="category" className="text-lg font-bold">
                Category
              </label>
              <p>Choose a category for your feedback</p>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="block w-full p-3 rounded-lg bg-gray-100"
              >
                <option value="UI">UI</option>
                <option value="UX">UX</option>
                <option value="Enhancement">Enhancement</option>
                <option value="Bug">Bug</option>
                <option value="Feature">Feature</option>
              </select>
              <label htmlFor="suggestion" className="text-lg font-bold">
                Feedback Detail
              </label>
              <p>
                Include any specific comments on what should be improved, added,
                etc.
              </p>
              <textarea
                className="block w-full p-3 rounded-lg bg-gray-100"
                name="suggestion"
                id="suggestion"
                cols="50"
                rows="5"
                value={formData.suggestion}
                onChange={handleChange}
                required
              />
              <div className="sm:flex justify-end gap-3">
                <Link to="/">
                  <button className="block w-full bg-blue-900 rounded-lg my-5 sm:my-0 px-4 py-3 text-white hover:cursor-pointer">
                    Cancel
                  </button>
                </Link>
                <button
                  className="block w-full sm:w-30 sm:py-0 bg-purple-500 rounded-lg py-3 text-white hover:cursor-pointer"
                  type="submit"
                >
                  Add Feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
