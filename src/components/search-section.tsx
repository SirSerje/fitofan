import './search-section.css';
export const SearchSection = () => {
  return (
    <div className="search-section">
      <div>icon tile</div>
      <div>icon list</div>

      <input
        type="text" // Changed to a valid input type
        className="custom-input"
        placeholder="Enter text"
      />
      <div>toggle</div>
      <div>
        buttons
        <button>1</button>
        <button>2</button>
      </div>
    </div>
  );
};