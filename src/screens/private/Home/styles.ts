import { ScrollView, Text, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ms } from "react-native-size-matters";
import styled from "styled-components";
import { Container } from "../../../global/styles/theme";

export const ContainerHome = styled(Container)`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentHome = styled(ScrollView)`
  flex: 1;
`;

export const ColorText = styled(TextInput)`
  width: 100%;
  color: ${({ theme }) => theme.colors.textWhite};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: ${RFValue(15)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.textGray};
  margin-bottom: ${ms(20)}px;
`;
