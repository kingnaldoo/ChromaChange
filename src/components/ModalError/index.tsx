import React, { useEffect, useState } from "react";
import {
  GestureResponderEvent,
  ModalProps,
  StatusBar,
  Modal,
  ActivityIndicator,
  Platform,
} from "react-native";
import { theme } from "../../global/styles/theme";
import {
  ButtonConfirmModal,
  WrongIcon,
  ModalBackground,
  ModalContent,
  TextModal,
  TitleModal,
  ButtonText,
  ContentContainer,
  ButtonCancelModal,
  ButtonContainer,
  ButtonTextAction,
} from "./styles";

interface ModalErrorProps extends ModalProps {
  title: string;
  text: string;
  isVisible: boolean;
  isLoading?: boolean;
  onClose?: ((event: GestureResponderEvent) => void) | undefined;
  onConfirm?: ((event: GestureResponderEvent) => void) | undefined;
}

export function ModalError({
  title,
  text,
  isVisible,
  isLoading,
  onConfirm,
  onClose,
  ...rest
}: ModalErrorProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (Platform.OS === "android")
      StatusBar.setBackgroundColor(
        isVisible ? "rgba(0, 0, 0, 0.7)" : theme.colors.background
      );
    setVisible(isVisible);
  }, [isVisible]);

  return (
    <Modal visible={visible} {...rest}>
      <ModalBackground>
        <ModalContent>
          <ContentContainer>
            <WrongIcon />
            <TitleModal>{title}</TitleModal>
            <TextModal>{text}</TextModal>
          </ContentContainer>
          <ButtonContainer>
            <ButtonCancelModal onPress={onClose}>
              <ButtonText>Cancelar</ButtonText>
            </ButtonCancelModal>
            <ButtonConfirmModal onPress={onConfirm}>
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <ButtonTextAction>Tentar novamente</ButtonTextAction>
              )}
            </ButtonConfirmModal>
          </ButtonContainer>
        </ModalContent>
      </ModalBackground>
    </Modal>
  );
}
