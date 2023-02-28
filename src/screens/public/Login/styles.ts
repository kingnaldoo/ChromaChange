import { Dimensions, ScrollView, Text, View } from "react-native";
import styled from "styled-components";
import { ms } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "../../../assets/icons/icon-negative.svg";
import Logo from "../../../assets/icons/logo.svg";
import { Container } from "../../../global/styles/theme";

const widthDimensions = Dimensions.get("window").width;
const heightDimensions = Dimensions.get("window").height;

export const ContainerLogin = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoginContent = styled(Container)`
  padding-top: ${ms(40)}px;
`;

export const IconBackground = styled(Icon).attrs({
  fill: "white",
  fillOpacity: 0.05,
  width: `${ms(heightDimensions * 0.75)}px`,
  height: heightDimensions,
})`
  position: absolute;
`;

export const LogoIcon = styled(Logo).attrs({
  fill: "white",
  width: `${ms(widthDimensions * 0.5)}px`,
  height: `${ms(widthDimensions * 0.5 * 0.33)}px`,
})`
  margin-bottom: ${ms(15)}px;
`;

export const Content = styled(View)`
  padding-top: ${ms(20)}px;
  padding-bottom: ${ms(20)}px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(Text)`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.textWhite};
  margin-bottom: ${ms(15)}px;
`;

export const SignUpText = styled(Text)`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.text300};
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const SignUpTextBold = styled(Text)`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.text700};
  color: ${({ theme }) => theme.colors.textWhite};
`;
