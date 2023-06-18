import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const PreviousSearches = () => {
  const searches = [
    "Pizza",
    "Burger",
    "Cookies",
    "Juice",
    "Biriyani",
    "Salad",
    "Ice cream",
    "Lazagna",
    "Pudding",
    "Soup",
  ];
  return (
    <div>
      <h2>Previous searches</h2>
      <div className="previous-searches-container">
        {searches.map((search, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
          >
            {search}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default PreviousSearches;
