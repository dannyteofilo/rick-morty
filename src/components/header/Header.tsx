import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import IconLogo from "../../assets/icons/logo.png";
import MenuLinks from "../menuLinks/MenuLinks";
import { authProvider } from "../../api/auth";

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export const Header = ({ userName }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleLogOut = () => {
    authProvider.logOut();
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      bg="#121418"
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Logo></Logo>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} click={handleLogOut} />
      <UserInfo name={userName} />
    </Flex>
  );
};

const Logo = () => <img src={IconLogo} alt="" />;

const UserInfo = ({ name }: any) => {
  return (
    <Box display={{ base: "none", md: "block" }}>
      <Flex flexDirection="row" alignItems="center">
        <Avatar bg="teal.500" />
        <Text ml="10px">{name}</Text>
      </Flex>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }: any) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default Header;
