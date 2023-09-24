import { Checkbox, Stack, Typography, styled } from "@mui/material";
import PackageCard from "../src/components/PackageCard";
import SearchBar from "../src/components/SearchBar";

const Category = styled(Typography)(({ theme }) => ({
  margin: "1rem",
}));

export default function Home({}) {
  return (
    <>
      <SearchBar />
      <Category variant="h6">Trips to the warm on Winter</Category>
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </Stack>
    </>
  );
}
