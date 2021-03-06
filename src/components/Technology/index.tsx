import { Box, Button, Flex, Image, Text, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import tracks from "../../utils/tracks";
import useToast from "../../hooks/useToast";
// import api from "../../services/axios";

interface Props {
  techName: string;
  techColor: string;
  techRole: string;
  techDescription: string;
  techIcon: JSX.Element;
}

export default function Technology({
  techName,
  techColor,
  techRole,
  techDescription,
  techIcon: TechIcon,
}: Props): JSX.Element {
  const { push } = useRouter();
  const { addToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSelectedTech(): Promise<void> {
    try {
      setIsSubmitting(true);
      // const response = await api.post("/user/track", { tech: techName});
      push(`/thanks/${techName}`);
      addToast({
        status: "success",
        description: `Trilha ${tracks[techName]} selecionada com sucesso!`,
      });
    } catch (error) {
      addToast({
        status: "error",
        description: `Ocorreu um erro ao selecionar a trilha ${tracks[techName]}!`,
      });
    }
    setIsSubmitting(false);
  }

  return (
    <Container mb="8rem">
      <Flex
        flexDirection="column"
        bgColor="black.100"
        w="100%"
        p="2rem"
        borderRadius="md"
        position="relative"
        transition="border 240ms"
        border="1px solid transparent"
        _hover={{
          border: `1px solid ${techColor}`,
        }}
      >
        {TechIcon}
        <Box color="grey.100" m="3.42rem 0 1.6rem 0">
          <Text fontSize="2rem">
            Trilha{" "}
            <strong style={{ color: techColor }}>{tracks[techName]}</strong>
          </Text>
          <Text fontSize="1.45rem" fontWeight="bold" color={techColor}>
            {techRole}
          </Text>
        </Box>
        <Box color="white.100" fontSize="1.25rem" height="198px">
          <Text>{techDescription}</Text>
        </Box>
        <Button
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          _disabled={{
            opacity: 0.2,
          }}
          bg={techColor}
          variant="solid"
          fontSize="1.1rem"
          _loading={{
            opacity: 1,
            fontSize: "1.25rem",
          }}
          _hover={{
            filter: "brightness(1.1)",
          }}
          width="100%"
          height="72px"
          mt="3.24rem"
          onClick={handleSelectedTech}
        >
          <Text>CONFIRMAR TRILHA</Text>
        </Button>
      </Flex>
    </Container>
  );
}
