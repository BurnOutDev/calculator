import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  List,
  ListIcon,
  ListItem as ChakraListItem,
  Square,
  Stack,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import pic from "./assets/images/pic.png";
import svg from "./assets/cut.svg";
import { useState } from "react";
import RNumericInput from 'react-numeric-input'

const Icon = styled.div`
  width: 16px;
  height: 4px;
  /* Gradient / Red */
  background: linear-gradient(90deg, #911812 0%, #e1261c 100%);
  margin-right: 8px;
`;

const IconMetal = styled(Icon)`
  background: linear-gradient(90deg, #d3dae8 0%, #a7b7d8 100%);
`;

const ListItem = styled(ChakraListItem)`
  display: flex;
  align-items: center;
`;

const SvgBackground = () => (
  <svg
    width="320"
    height="755"
    viewBox="0 0 320 755"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 18.8824L20 0H300L320 18.8824V736.118L300 755H20L0 736.118V18.8824Z"
      fill="white"
    />
  </svg>
);

const Polygon = styled(Box)`
  background-image: url(${svg});
`;

const StyledInput = styled(Input)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const isNumeric = (str) => {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

function App() {
  const [averageIncome, setAverageIncome] = useState("");
  const [days, setDays] = useState("");

  return (
    <Container maxW="100%">
      <Flex
        padding="100px"
        color="white"
        bgGradient="linear-gradient(90deg, #2B303A 0%, #3F4756 100%)"
      >
        <Box flex="2">
          <Heading>Quantum Tristique Condimentum</Heading>
          <Text fontSize="md">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Curabitur
            blandit tempus porttitor. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet. Vestibulum id ligula porta felis
            euismod semper.
          </Text>
          <Flex>
            <Box flex="2">
              <Heading>Fringilla Euismod Adipiscing Ipsum</Heading>
              <Text fontSize="md">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Maecenas faucibus mollis interdum.
                Aenean lacinia bibendum nulla sed.
              </Text>
            </Box>
            <Box flex="1">
              <Image
                src={pic}
                borderRadius="4px"
                height="180px"
                width="240px"
              />
            </Box>
          </Flex>
          <List spacing={3}>
            <ListItem>
              <Icon />
              Tellus Ullamcorper Inceptos
            </ListItem>
            <ListItem>
              <Icon />
              Magna Condimentum
            </ListItem>

            <ListItem marginLeft="30px">
              <IconMetal />
              Mattis Tristique
            </ListItem>
            <ListItem marginLeft="30px">
              <IconMetal />
              Pharetra Pellentesque Dapibus
            </ListItem>
          </List>
        </Box>
        <Box flex="1" color="#111317">
          <Polygon height="755px" padding="80px 20px" width="320px">
            <Heading lineHeight="25px" size="24px" color="#111317">
              Compensation Calculator
            </Heading>

            <Stack>
              <Text fontSize="14px">Average income</Text>
              <InputGroup>
                <InputRightElement pointerEvents="none" children="€" />
                <StyledInput
                  value={averageIncome}
                  onChange={(e) => setAverageIncome(e.target.value)}
                  size="sm"
                />
              </InputGroup>
            </Stack>

            <Stack>
              <Text fontSize="14px">Days on sick-leave</Text>
              <InputGroup>
                <InputRightElement pointerEvents="none" children="days" />
                <RNumericInput
                  boxShadow='0px 2px 4px rgba(0, 0, 0, 0.1)'
                  value={'asdasd'}
                  min={0} max={100}
                  size="sm"
                />
              </InputGroup>
            </Stack>
          </Polygon>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
