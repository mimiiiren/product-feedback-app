import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import IconPlus from "../../assets/icons/icon-plus.svg";
import SuggestionCard from "../components/SuggestionCard";
import Empty from "../../assets/suggestions/illustration-empty.svg";

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [category, setCategory] = useState("All");
  const filterButtons = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];
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
    if (category === "All") {
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
    <div className="md:m-10">
      <div className="flex flex-col lg:flex-row lg:justify-center md:gap-5">
        <div className="contents md:flex md:flex-row lg:flex-col gap-5 lg:max-w-[255px]">
          <div className="order-0 md:order-none bg-gradient-to-r from-blue-400 via-purple-600 to-orange-300 md:rounded-lg p-8 text-white h-[120px] md:h-[200px] md:w-[255px] lg:w-auto">
            <h1 className="text-2xl font-bold">My Company</h1>
            <p>Feedback board</p>
          </div>
          <div className="order-2 md:order-none flex flex-row lg:flex-col flex-wrap gap-2 p-6 mt-5 mx-5 md:mx-0 bg-white rounded-lg lg:h-[200px] content-start md:w-[255px] lg:w-auto">
            {filterButtons.map((filter) => (
              <div key={filter}>
                <button
                  className={`rounded-lg px-4 py-2 transition-all duration-200
    border-2 border-transparent hover:cursor-pointer hover:bg-indigo-400 hover:text-white hover:border-indigo-400 hover:opacity-75
    ${
      category === filter
        ? "bg-indigo-500 text-white border-indigo-500"
        : "bg-indigo-50 text-blue-600"
    }
  `}
                  onClick={() => setCategory(filter)}
                >
                  {filter}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="contents md:block md:w-2xl">
          <div className="order-1 md:order-none bg-blue-900 flex justify-between md:rounded-lg p-4">
            <p className="font-bold text-white">
              {suggestions.length} suggestions
            </p>
            <Link
              to="/add-feedback"
              className="bg-purple-500 rounded-lg text-white p-3"
            >
              <img src={IconPlus} alt="plus sign" className="inline-block" />{" "}
              Add Feedback
            </Link>
          </div>
          <div className="contents">
            <div className="order-last md:order-none my-5 mx-5 md:m-0 ">
              {suggestions.length === 0 && (
                <div className="text-center bg-white rounded-lg h-[500px] p-5 space-y-5">
                  <img
                    src={Empty}
                    alt="person with magnifying glass"
                    className="m-auto my-10"
                  />
                  <h3 className="text-lg font-bold">
                    There is no feedback yet.
                  </h3>
                  <p className="text-gray-400">
                    Got a suggestion? Found a bug that needs to be squashed? We
                    love hearing about new ideas to improve our app.
                  </p>
                </div>
              )}
              {suggestions.map((item) => (
                <SuggestionCard suggestionData={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
