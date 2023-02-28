import { TouchableOpacity, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ms } from "react-native-size-matters";
import styled from "styled-components";

export const LogoutButton = styled(TouchableOpacity)`
  margin-right: ${ms(20)}px;
  padding: ${ms(5)}px 0 ${ms(5)}px ${ms(5)}px;
`;

export const LogoutText = styled(Text)`
  color: ${({ theme }) => theme.colors.textWhite};
  font-family: ${({ theme }) => theme.fonts.text300};
  font-size: ${RFValue(15)}px;
`;
