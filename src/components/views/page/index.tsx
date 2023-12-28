import { Box } from "@gluestack-ui/themed";
import type { PropsWithChildren } from "react";

type PageProps = PropsWithChildren<Parameters<typeof Box>[0]>;

export default function Page({ children, ...props }: PageProps) {
  return (
    <Box
      {...props}
      h="$full"
      w="$full"
      $dark-bg="$backgroundDark950"
      $light-bg="$backgroundDark50"
      p="$4"
    >
      {children}
    </Box>
  );
}
