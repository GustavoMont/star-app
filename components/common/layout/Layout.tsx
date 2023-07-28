import { View, useTheme } from "native-base";
import React, { PropsWithChildren } from "react";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View flex={1} p={5} backgroundColor={colors.darkBlue[900]}>
      {children}
    </View>
  );
};
