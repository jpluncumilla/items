import { useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList";
import ItemList from "./ItemList";
import data from "./data.json";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (isChecked, id) => {
    setSelectedCategories((previousSelection) =>
      isChecked
        ? [...previousSelection, id]
        : previousSelection.filter((e) => e !== id)
    );
  };

  //create a filter function
  const filteredItems = data.items.filter((items) =>
    selectedCategories.includes(items.id)
  );
  return (
    <div className='App'>
      <h1>Reingold Assessment</h1>
      <CategoryList
        categories={data.categories}
        onCategoryChange={handleCategoryChange}
        selectedCategories={selectedCategories}
      />
      {selectedCategories.length === 0 && <ItemList items={data.items} />}
      {selectedCategories.length > 0 && <ItemList items={filteredItems} />}
    </div>
  );
}

export default App;
