import ConnectBluetoothButton from "@components/buttons/ConnectBluetoothButton";
import Page from "@components/views/Page";
import { router } from "expo-router";

export default function IndexPage() {
  return (
    <Page alignItems="center" justifyContent="center">
      <ConnectBluetoothButton onConnect={() => router.replace("/home/")} />
    </Page>
  );
}
