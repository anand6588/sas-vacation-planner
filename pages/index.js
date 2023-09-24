import { Stack, Typography, styled } from "@mui/material";
import PackageCard from "../src/components/PackageCard";
import SearchBar from "../src/components/SearchBar";
import { useEffect, useState } from "react";

const Category = styled(Typography)(({ theme }) => ({
  margin: "1rem",
}));

export default function Home({}) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch("/api/packages/recommended")
      .then((res) => res.json())
      .then((data) => setPackages(data));

    console.log("packagespackages", packages.length);
  }, []);

  return (
    <>
      <SearchBar />
      <Category variant="h6">Recommended trips for winter</Category>
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        {packages.length > 0 &&
          packages.map((pac, i) => <PackageCard key={i} packageDetail={pac} />)}
      </Stack>
    </>
  );
}
