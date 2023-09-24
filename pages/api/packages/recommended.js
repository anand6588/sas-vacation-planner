import allPackages from "../../../src/data/vacation-packages.json";

const RecommendedPackages = (req, res) => {
  res.status(200).json(allPackages);
};

export default RecommendedPackages;
