import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { ms } from "react-native-size-matters";

export const ModalBackground = styled(View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled(View)`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 10px;
  padding: ${ms(15)}px 0 0 0;
`;

export const ContentContainer = styled(View)`
  padding: 0 ${ms(20)}px;
`;

export const WrongIcon = styled(Feather).attrs({
  name: "x-circle",
  size: 50,
  color: "#DF1B1B",
})`
  margin-bottom: ${ms(5)}px;
  align-self: center;
`;

export const TitleModal = styled(Text)`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.colors.alert};
  text-align: center;
`;

export const TextModal = styled(Text)`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.text300};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${ms(30)}px;
  text-align: center;
`;

export const ButtonContainer = styled(View)`
  height: ${ms(50)}px;
  flex-direction: row;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.textGray};
`;

export const ButtonCancelModal = styled(TouchableOpacity)`
  width: 50%;
  justify-content: center;
  align-items: center;
  padding: 0 ${ms(5)}px;
  border-bottom-left-radius: 10px;
`;

export const ButtonConfirmModal = styled(TouchableOpacity)`
  width: 50%;
  justify-content: center;
  align-items: center;
  padding: 0 ${ms(5)}px;
  background-color: ${({ theme }) => theme.colors.alert};
  border-bottom-right-radius: 10px;
`;

export const ButtonText = styled(Text)`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.text300};
  color: ${({ theme }) => theme.colors.textGray};
  text-align: center;
`;

export const ButtonTextAction = styled(Text)`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.text300};
  color: ${({ theme }) => theme.colors.textWhite};
  text-align: center;
`;
