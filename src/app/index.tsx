import ConnectBluetoothButton from "@/components/buttons/connect-bluetooth-button";
import Page from "@/components/views/page";
import { router } from "expo-router";

export default function IndexPage() {
  return (
    <Page alignItems="center" justifyContent="center">
      <ConnectBluetoothButton onConnect={() => router.replace("/home/")} />
    </Page>
  );
}
