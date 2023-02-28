import { ScrollView, View } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components";

export const theme = {
  colors: {
    primary: "#2271A1",
    primaryLight: "#2F8AB7",
    primaryDark: "#1B5E8C",
    text: "#0D0D0D",
    textWhite: "#FFFFFF",
    textGray: "#747070",
    background: "#111111",
    backgroundWhite: "#FCFCFC",
    backgroundPrimary: "#1BB471",
    alert: "#DF1B1B",
    disabled: "#DFDFDF",
  },
  fonts: {
    title700: "Ubuntu_700Bold",
    text700: "Roboto_700Bold",
    text300: "Roboto_400Regular",
  },
};

export const Container = styled(ScrollView)`
  flex: 1;
  padding: 0 ${ms(20)}px;
`;

export const CentralizeView = styled(View)`
  display: flex;
  align-items: center;
`;
