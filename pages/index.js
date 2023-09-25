import { Stack, Typography, styled } from "@mui/material";
import PackageCard from "../src/components/PackageCard";
import SearchBar from "../src/components/SearchBar";
import { useEffect, useState } from "react";
import _ from "lodash";

const Category = styled(Typography)(({ theme }) => ({
  margin: "1rem",
}));

export default function Home({}) {
  const defaultFilterValue = {
    location: "",
    days: 0,
    priceRange: false,
    priceRangeMin: 5000,
    priceRangeMax: 50000,
  };

  const [packages, setPackages] = useState([]);

  const [isFilterChanged, setIsFilterChanged] = useState(false);

  const [filters, setFilters] = useState(defaultFilterValue);

  useEffect(() => {
    setIsFilterChanged(!_.isEqual(filters, defaultFilterValue));
  }, [isFilterChanged, filters]);

  useEffect(() => {
    let apiUrl = "/api/packages/recommended";
    if (isFilterChanged) {
      apiUrl = "/api/packages/search?" + new URLSearchParams(filters);
    }
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [isFilterChanged, filters]);

  return (
    <>
      <SearchBar filters={filters} setFilters={setFilters} />
      <Category variant="h6">
        {isFilterChanged
          ? `Trips from your search result`
          : `Recommended trips for winter`}
      </Category>

      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        {packages.length > 0 &&
          packages.map((pac, i) => <PackageCard key={i} packageDetail={pac} />)}
      </Stack>
    </>
  );
}
