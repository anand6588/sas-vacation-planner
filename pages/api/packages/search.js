import allPackages from "../../../src/data/vacation-packages.json";

const _filterPackages = (pack, filters) => {
  if (parseInt(filters.days) > 0) {
    return (
      pack?.destination
        ?.toLowerCase()
        .startsWith(filters.location.toLowerCase()) &&
      pack.days === parseInt(filters.days)
    );
  } else {
    return pack?.destination
      ?.toLowerCase()
      .startsWith(filters.location.toLowerCase());
  }
};

const SearchPackages = (req, res) => {
  const filters = req.query;
  const results = allPackages.filter((pack, i) => {
    if (filters.priceRange == "true") {
      if (
        pack.priceStartFrom >= parseInt(filters.priceRangeMin) &&
        pack.priceStartFrom <= parseInt(filters.priceRangeMax)
      ) {
        return _filterPackages(pack, filters);
      }
    } else {
      return _filterPackages(pack, filters);
    }
  });
  res.status(200).json(results);
};

export default SearchPackages;
