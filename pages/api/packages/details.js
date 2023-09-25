import allPackages from "../../../src/data/vacation-packages.json";

const GetPackageDetails = (req, res) => {
  const packageId = req.query.id;
  const results = allPackages.filter((pack) => pack.id + "" == packageId + "");
  res.status(200).json(results);
};

export default GetPackageDetails;
