export default function SuggestionCard({ suggestionData }) {
  const { title, category, suggestion } = suggestionData;
  return (
    <div className="bg-white my-5 rounded-lg px-15 py-8">
      <h2 className="font-bold mb-3">{title}</h2>
      <p className="text-gray-400 mb-3">{suggestion}</p>
      <p className="text-blue-600 bg-gray-100 inline px-5 py-2 rounded-lg">
        {category}
      </p>
    </div>
  );
}
