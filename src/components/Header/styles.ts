import { Platform, Text, View } from "react-native";
import { ms } from "react-native-size-matters";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const HeaderContainer = styled(View)`
  width: 100%;
  height: ${Platform.OS === "ios" ? 90 : 70}px;
  padding-top: ${Platform.OS === "ios" ? getStatusBarHeight() : 0}px;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
`;

export const HeaderLeft = styled(View)`
  width: 20%;
  height: 100%;
  justify-content: center;
  padding-left: ${ms(20)}px;
`;

export const HeaderRight = styled(View)`
  width: 25%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  padding-right: ${ms(20)}px;
`;

export const HeaderCenter = styled(View)`
  width: 60%;
  height: 100%;
  justify-content: center;
`;

export const HeaderIcon = styled(Feather).attrs({
  size: ms(25),
  color: "#fff",
})``;

export const HeaderTitle = styled(Text)`
  font-size: ${RFValue(16)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.textWhite};
`;
