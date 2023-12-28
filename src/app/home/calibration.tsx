import Page from "@/components/views/page";
import {
  Button,
  ButtonText,
  Center,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Heading,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import type { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ title, children }: SectionProps) {
  return (
    <VStack space="md" mb="$8">
      <Heading size="sm">{title}</Heading>
      {children}
    </VStack>
  );
}

export default function Calibration() {
  return (
    <Page>
      <Section title="Velocidade">
        <HStack space="md">
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Roda esquerda</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue="0"
                placeholder="password"
                keyboardType="numeric"
              />
            </Input>
          </FormControl>
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Roda direita</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                defaultValue="0"
                placeholder="password"
                keyboardType="numeric"
              />
            </Input>
          </FormControl>
        </HStack>
      </Section>
      <Section title="Testes">
        <HStack>
          <HStack space="md">
            <Button>
              <ButtonText>Sensores</ButtonText>
            </Button>
            <Center>
              <Text>0</Text>
            </Center>
          </HStack>
        </HStack>
        <HStack>
          <HStack space="md">
            <Button>
              <ButtonText>Motores</ButtonText>
            </Button>
            <Center>
              <Text>0</Text>
            </Center>
          </HStack>
        </HStack>
      </Section>
    </Page>
  );
}
