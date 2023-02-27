import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ms } from "react-native-size-matters";
import styled from "styled-components";

export const Container = styled(View)`
  width: 100%;
  margin-bottom: ${ms(5)}px;
`;

export const InputWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${ms(10)}px;
`;

export const ShowPasswordButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const InputTitle = styled(Text)`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const InputText = styled(TextInput)`
  padding: ${ms(15)}px ${ms(15)}px;
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.text300};
  color: ${({ theme }) => theme.colors.text};
`;

export const AlertText = styled(Text)`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.text300};
  color: ${({ theme }) => theme.colors.alert};
`;
