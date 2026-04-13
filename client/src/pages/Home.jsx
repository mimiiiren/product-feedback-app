import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import IconPlus from "../../assets/icons/icon-plus.svg";
import SuggestionCard from "../components/SuggestionCard.";

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [category, setCategory] = useState("all");
  const filterButtons = [
    { label: "All", value: "all" },
    { label: "UI", value: "ui" },
    { label: "UX", value: "ux" },
    { label: "Enhancement", value: "enhancement" },
    { label: "Bug", value: "bug" },
    { label: "Feature", value: "feature" },
  ];
  const getAllSuggestions = async () => {
    try {
      const response = await fetch("/api/get-all-suggestions", {
        method: "GET",
      });
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error(error);
    }
  };
  const getSuggestionCategory = async (category) => {
    if (category === "all") {
      getAllSuggestions();
    } else {
      try {
        const response = await fetch(
          `/api/get-suggestions-by-category/${category}`,
          {
            method: "GET",
          },
        );
        const selectedCategory = await response.json();
        setSuggestions(selectedCategory);
      } catch (error) {
        console.error(error);
      }
    }
  };
  useEffect(() => {
    getSuggestionCategory(category);
  }, [category]);
  return (
    <div className="m-10">
      <div className="md:flex justify-center gap-5">
        <div className="md:w-[300px] ">
          <div className="bg-gradient-to-r from-blue-400 via-purple-600 to-orange-300 rounded-2xl p-8 text-white rounded-lg md:h-[200px]">
            <h1 className="text-2xl font-bold">My Company</h1>
            <p>Feedback board</p>
          </div>
          <div className="bg-white rounded-lg md:h-[200px] md:flex gap-3 flex-wrap hidden">
            {filterButtons.map((filter) => (
              <div className="">
                <button
                  className="rounded-lg px-4 py-2 text-blue-600 bg-gray-100"
                  onClick={() => setCategory(filter.value)}
                  key={filter.label}
                >
                  {filter.label}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-2xl">
          <div className="bg-blue-900 flex justify-between rounded-lg p-4">
            <p className="font-bold text-white">
              {suggestions.length} suggestions
            </p>
            <Link
              to="/add-feedback"
              className="bg-purple-500 rounded-lg text-white p-3"
            >
              <img src={IconPlus} alt="Add" className="inline-block" /> Add
              Feedback
            </Link>
          </div>
          <div className="text-center bg-white rounded-lg h-[500px]">
            {suggestions.length === 0 && (
              <div>
                <h3 className="text-lg font-bold">There is no feedback yet.</h3>
                <p className="text-gray-400">
                  Got a suggestion? Found a bug that needs to be squashed? We
                  love hearing about new ideas to improve our app.
                </p>
              </div>
            )}
            {suggestions.map((item) => (
              <SuggestionCard suggestionData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
