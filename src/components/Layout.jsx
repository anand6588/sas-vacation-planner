import { Box, Container, Stack, styled } from "@mui/material";
import NavBar from "./NavBar";

const Content = styled(Box)(({ theme }) => ({
  paddingBottom: 50,
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
