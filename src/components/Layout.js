import { Box, Container, Stack, styled } from "@mui/material";
import NavBar from "./NavBar";

const Content = styled(Box)(({ theme }) => ({
  // background: "#f5fafe",
  height: "100vh",
}));

export default function Layout({ children }) {
  return (
    <Stack>
      <NavBar />
      <Container fixed>
        <Content>{children}</Content>
      </Container>
    </Stack>
  );
}
