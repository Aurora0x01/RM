import React from 'react';

const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <aside className="sidebar">
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
