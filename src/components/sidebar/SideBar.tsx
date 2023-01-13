import { Box, Button, VStack, Text } from "@chakra-ui/react";
import MenuItem from "../menuItem/MenuItem";

const SidebarContent = () => (
  <VStack>
    <MenuItem to="/" mb={8}>
      Home
    </MenuItem>
    <MenuItem to="/" mb={8}>
      Explore
    </MenuItem>
    <MenuItem to="/" mb={8}>
      Blog
    </MenuItem>
    <MenuItem to="/" mb={8}>
      Contact
    </MenuItem>
    <MenuItem to="/auth/login" isLast textDecoration="underline">
      Salir
    </MenuItem>
  </VStack>
);

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      left={0}
      p={5}
      pt={20}
      w="250px"
      top={70}
      h="100%"
      bg="#121418"
      display={{ base: "none", md: "block" }}
    >
      <SidebarContent />
    </Box>
  );
};

export default Sidebar;
