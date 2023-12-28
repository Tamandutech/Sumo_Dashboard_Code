import {
  CircleIcon,
  Radio,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@gluestack-ui/themed";

type RadioItemProps = { label: string } & Parameters<typeof Radio>[0];

export default function RadioItem({ label, ...props }: RadioItemProps) {
  return (
    <Radio {...props}>
      <RadioIndicator mr="$2">
        <RadioIcon as={CircleIcon} />
      </RadioIndicator>
      <RadioLabel>{label}</RadioLabel>
    </Radio>
  );
}
