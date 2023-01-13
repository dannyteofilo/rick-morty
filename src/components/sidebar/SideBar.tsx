import { Box, Button, VStack } from "@chakra-ui/react";
import MenuItem from "../menuItem/MenuItem";

const SidebarContent = () => (
  <VStack>
    <MenuItem to="/" mb={4}>Home</MenuItem>
    <MenuItem to="/" mb={4}> Explore </MenuItem>
    <MenuItem to="/" mb={4}> Blog </MenuItem>
    <MenuItem to="/" mb={4}> Contact </MenuItem>
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
      pt={20}
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
