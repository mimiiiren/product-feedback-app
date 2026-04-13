import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewFeedback from "../../assets/icons/icon-new-feedback.svg";

export default function AddFeedback() {
  const [formData, setFormData] = useState({
    title: "",
    category: "ui",
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
      <Link to="/">
        <button className="text-lg font-bold text-gray-500 hover:cursor-pointer">
          ← Go Back
        </button>
      </Link>
      <div className="my-15 mx-5 flex justify-center">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg w-[600px]">
          <img src={NewFeedback} alt="plus sign" />
          <div className="m-10 space-y-3">
            <h1 className="text-3xl font-bold text-gray-600 my-10">
              Create New Feedback
            </h1>
            <label className="text-lg font-bold">Feedback Title</label>
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
            <label className="text-lg font-bold">Category</label>
            <p>Choose a category for your feedback</p>
            <select className="block w-full p-3 rounded-lg bg-gray-100">
              <option value="ui">UI</option>
              <option value="ux">UX</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature</option>
            </select>
            <label className="text-lg font-bold">Feedback Detail</label>
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
            <div className="flex justify-end gap-3 my-5">
              <button className="bg-blue-900 rounded-lg px-4 py-2 text-white">
                Cancel
              </button>
              <button
                className="bg-purple-500 rounded-lg px-4 py-2 text-white"
                type="submit"
              >
                Add Feedback
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
