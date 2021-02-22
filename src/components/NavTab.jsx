import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

import { Text } from "../text/Text.js";

const navTab = () => {
  const DataTabs = ({ text }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Tabs
        isFitted={true}
        orientation="vertical"
        margin="8"
        style={{ height: "73vh" }}
        colorScheme={"purple"}
        boxShadow={"lg"}
      >
        <TabList>
          {text.map((tab, index) => (
            <Tab
              _active={{ color: "purple.2" }}
              fontSize={"2xl"}
              letterSpacing={"wider"}
              key={index}
            >
              {tab.label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {text.map((tab, index) => (
            <TabPanel
              marginTop={"5"}
              textAlign={"justify"}
              fontSize={"xl"}
              letterSpacing={"wide"}
              p={4}
              key={index}
            >
              {tab.content || <Button justifySelf={'center'} onClick={() => onOpen()}>Clique</Button>}
            </TabPanel>
          ))}
        </TabPanels>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Table variant="simple" size={"lg"}>
                <Thead>
                  <Tr>
                    <Th>Tipo Java</Th>
                    <Th>Capacidade de Armazenamento</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>char</Td>
                    <Td>16 bits – Caracteres Unicode.</Td>
                  </Tr>
                  <Tr>
                    <Td>byte</Td>
                    <Td>8 bits (1 byte) -128 até 127</Td>
                  </Tr>
                  <Tr>
                    <Td>short</Td>
                    <Td>16 bits (2 bytes) -32768 até 32,7677</Td>
                  </Tr>
                  <Tr>
                    <Td>int</Td>
                    <Td>32 bits (4 bytes) -2147483648 até 2147483647</Td>
                  </Tr>
                  <Tr>
                    <Td>long</Td>
                    <Td>
                      64 bits (8 bytes) -9223372036854775808 até
                      9223372036854775807
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>float</Td>
                    <Td>32 bits (4 bytes) 7 casas de precisão</Td>
                  </Tr>
                  <Tr>
                    <Td>double</Td>
                    <Td>64 bits (8 bytes) 15 casas de precisão</Td>
                  </Tr>
                  <Tr>
                    <Td>boolean</Td>
                    <Td>8 bits (1 byte) true ou falso</Td>
                  </Tr>
                </Tbody>
              </Table>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Tabs>
    );
  };

  return <DataTabs text={Text} />;
};

export default navTab;
