import { Box, Button, Stack } from "@chakra-ui/react";
import MenuItem from "../menuItem/MenuItem";

const MenuLinks = ({ isOpen }: any) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/"> Explore </MenuItem>
        <MenuItem to="/"> Blog </MenuItem>
        <MenuItem to="/"> Contact </MenuItem>
        <MenuItem to="/auth/login" isLast>
          <Button
            size="sm"
            rounded="md"
            color="blue"
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            }}
          >
            Sair
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;