import RadioItem from "@/components/forms/radio-item";
import StrategySelect from "@/components/forms/strategy-select";
import Page from "@/components/views/page";
import {
  Button,
  ButtonIcon,
  ButtonText,
  FormControl,
  HStack,
  Heading,
  RadioGroup,
  VStack,
} from "@gluestack-ui/themed";
import { PlayCircle } from "lucide-react-native";
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

const directions = new Map<string, string>([
  ["0", "Esquerda"],
  ["1", "Direita"],
]);
const modes = new Map<string, string>([
  ["D", "Defesa"],
  ["A", "Ataque"],
]);

export default function Home() {
  return (
    <Page>
      <VStack space="md" mt="$5">
        <FormControl>
          <Section title="Estratégia">
            <StrategySelect />
          </Section>
          <Section title="Direção">
            <RadioGroup>
              <HStack space="2xl">
                {Array.from(directions.entries()).map(([value, label]) => (
                  <RadioItem value={value} key={value} label={label} />
                ))}
              </HStack>
            </RadioGroup>
          </Section>
          <Section title="Modo">
            <RadioGroup>
              <HStack space="2xl">
                {Array.from(modes.entries()).map(([value, label]) => (
                  <RadioItem value={value} key={value} label={label} />
                ))}
              </HStack>
            </RadioGroup>
          </Section>
          <Button action="primary">
            <ButtonIcon as={() => <PlayCircle size={24} />} color="$white" />
            <ButtonText>OK</ButtonText>
          </Button>
        </FormControl>
      </VStack>
    </Page>
  );
}
