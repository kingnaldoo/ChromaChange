import { Text, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ms } from "react-native-size-matters";
import styled from "styled-components";

export const Container = styled(TouchableOpacity)`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${ms(15)}px 0;
  border-radius: 300px;
`;

export const ButtonText = styled(Text)`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.textWhite};
  text-align: center;
`;
