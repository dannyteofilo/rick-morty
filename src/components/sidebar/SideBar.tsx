import { Box, Button, VStack } from "@chakra-ui/react";
import MenuItem from "../menuItem/MenuItem";

const SidebarContent = () => (
  <VStack>
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
  </VStack>
);

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="250px"
      top={70}
      h="100%"
      bg="#121418"
      display={{base:'none',md:'block'}}
    >
      <SidebarContent />
    </Box>
  );
};

export default Sidebar;
