import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import MenuItem from "../menuItem/MenuItem";

interface Props {
  onClose: Function;
  isOpen: boolean;
  variant: "drawer" | "sidebar";
}

const SidebarContent = ({ onClick }: { onClick: Function }) => (
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

const Sidebar = ({ isOpen, variant, onClose }: any) => {
  return variant === "sidebar" ? (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="250px"
      top={70}
      h="100%"
      bg="#121418"
    >
      <SidebarContent onClick={onClose} />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chakra-UI</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
