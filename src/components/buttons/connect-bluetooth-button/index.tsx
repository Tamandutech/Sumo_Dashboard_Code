import BluetoothConnectIcon from "@/components/icons/bluetooth-connect-icon";
import {
  Button,
  ButtonIcon,
  Tooltip,
  TooltipContent,
  TooltipText,
} from "@gluestack-ui/themed";

type ConnectBluetoothButtonProps = {
  onConnect?: () => void;
};

export default function ConnectBluetoothButton({
  onConnect,
}: ConnectBluetoothButtonProps) {
  return (
    <Tooltip
      placement="top"
      trigger={(triggerProps) => (
        <Button
          action="primary"
          rounded="$full"
          size="xl"
          h="$20"
          {...triggerProps}
          onPress={onConnect}
        >
          <ButtonIcon as={BluetoothConnectIcon} color="$white" />
        </Button>
      )}
    >
      <TooltipContent bg="$tertiary500">
        <TooltipText>
          Conecte o robô para começar a usar a dashboard
        </TooltipText>
      </TooltipContent>
    </Tooltip>
  );
}
