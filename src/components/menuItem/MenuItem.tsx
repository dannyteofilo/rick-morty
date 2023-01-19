import { Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <Link href={to}>
        <Text
          display="block"
          {...rest}
          color="white"
          _hover={{ color: "#BBDF2B", fontWeight: "bold" }}
        >
          {children}
        </Text>
      </Link>
    </motion.div>
  );
};

export default MenuItem;
