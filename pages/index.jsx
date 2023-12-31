import { Stack, Typography, styled } from "@mui/material";
import PackageCard from "../src/components/PackageCard";
import SearchBar from "../src/components/SearchBar";
import { useEffect, useState } from "react";
import _ from "lodash";
import NoResultMessage from "../src/components/NoResultMessage";

const Category = styled(Typography)(({ theme }) => ({
  margin: "1rem",
}));

const defaultFilters = {
  location: "",
  days: 0,
  priceRange: false,
  priceRangeMin: 5000,
  priceRangeMax: 50000,
};

export default function Home({}) {
  const [packages, setPackages] = useState([]);
  const [isFilterChanged, setIsFilterChanged] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    setIsFilterChanged(!_.isEqual(filters, defaultFilters));
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
          ? `Trips from your search combination`
          : `Recommended trips for winter`}
      </Category>

      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        {packages.length > 0 ? (
          packages.map((pac, i) => <PackageCard key={i} packageDetail={pac} />)
        ) : (
          <NoResultMessage>
            No results found for this search combination
          </NoResultMessage>
        )}
      </Stack>
    </>
  );
}
