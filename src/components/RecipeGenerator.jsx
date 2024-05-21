import React, { useState } from 'react';
import axios from 'axios';

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState([]);
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addIngredient = () => {
    if (input.trim()) {
      setIngredients([...ingredients, input.trim()]);
      setInput('');
    }
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleGenerateRecipe = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/generate-recipe', { ingredients });
      setRecipe(response.data.recipe);
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 mt-5" id='recipe'>
      <h2 className="text-2xl font-bold mb-4">Recipe Generator</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter an ingredient"
          className="border border-gray-300 p-2 rounded mr-2 flex-grow"
        />
        <button
          onClick={addIngredient}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Add Ingredient
        </button>
      </div>
      <ul className="mb-4">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
            {ingredient}
            <button
              onClick={() => removeIngredient(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleGenerateRecipe}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Recipe'}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {recipe && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-semibold mb-2">Generated Recipe</h3>
          <p>{recipe}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;
