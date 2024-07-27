import React from "react";

const CategoryList = ({ categories, onCategoryChange, selectedCategories }) => {
  const handleChange = (event, id) => {
    onCategoryChange(event.target.checked, id);
  };
  return (
    <div className='category-container'>
      {categories.map((category) => (
        <div key={category.id}>
          <fieldset>
            <label for='category'>{category.display}</label>
            <input
              type='checkbox'
              checked={selectedCategories.includes(category.id)}
              onChange={(e) => handleChange(e, category.id)}
            />

            {category.categories && (
              <div>
                <CategoryList
                  categories={category.categories}
                  onCategoryChange={onCategoryChange}
                  selectedCategories={selectedCategories}
                />
              </div>
            )}
          </fieldset>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
