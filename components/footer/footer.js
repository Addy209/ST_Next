import React from "react";
import styles from "./footer.module.css";
import { SimpleGrid, Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <SimpleGrid columns={[1, 2, 3]} spacing="40px">
        <Box>Footer Section One</Box>
        <Box>Footer Section Two</Box>
        <Box>Footer Section Three</Box>
      </SimpleGrid>
    </div>
  );
};

export default Footer;
