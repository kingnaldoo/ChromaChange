import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
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

export const ColorText = styled(TextInput).attrs({
  placeholderTextColor: "#70707096",
})`
  width: 32%;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  font-size: ${RFValue(9)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.textGray};
  margin-bottom: ${ms(20)}px;
  padding: 0 ${ms(5)}px;
`;

export const InlineInput = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoutButton = styled(TouchableOpacity)`
  padding: ${ms(5)}px 0 ${ms(5)}px ${ms(5)}px;
`;

export const LogoutText = styled(Text)`
  color: ${({ theme }) => theme.colors.textWhite};
  font-family: ${({ theme }) => theme.fonts.text300};
  font-size: ${RFValue(15)}px;
`;
