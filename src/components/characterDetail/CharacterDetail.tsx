import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useDisclosure,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { CharactersInterface } from "../../interfaces/Characters.interface";

const CharacterDetail: React.FC<CharactersInterface> = (detail) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail]);
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{detail.name}</Heading>
              <Image src={detail.image}  borderRadius={4} />
              <Text as="b">Estatus:</Text>
              <Text as="i">{detail.status}</Text>
              <Text as="b">Especie:</Text>
              <Text as="i">{detail.species}</Text>
              <Text as="b">Origen:</Text>
              <Text as="i">{detail.origin.name}</Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CharacterDetail;
