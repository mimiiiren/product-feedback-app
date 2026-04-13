export function SuggestionCard({ suggestionData }) {
  const { title, category, suggestion } = suggestionData;
  return (
    <div>
      <h2>{title}</h2>
      <p>{suggestion}</p>
      <p>{category}</p>
    </div>
  );
}
