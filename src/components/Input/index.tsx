import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import {
  AlertText,
  Container,
  InputText,
  InputTitle,
  InputWrapper,
  ShowPasswordButton,
} from "./styles";

interface InputProps extends TextInputProps {
  title: string;
  placeholder: string;
  isPassword?: boolean;
  type?: "green" | "white";
  error?: string;
}

export function Input({
  title,
  placeholder,
  isPassword,
  type,
  error,
  ...rest
}: InputProps) {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <Container>
      <InputTitle
        style={{
          color:
            type === "green" ? theme.colors.primary : theme.colors.textWhite,
        }}
      >
        {title}
      </InputTitle>
      <InputWrapper
        style={{
          borderWidth: 2,
          borderColor: error ? `${theme.colors.alert}` : "transparent",
        }}
      >
        <InputText
          placeholder={placeholder}
          placeholderTextColor="#A0A0B2"
          secureTextEntry={isPassword && !visiblePassword}
          style={{
            width: isPassword ? "80%" : "100%",
          }}
          {...rest}
        />

        {isPassword && (
          <ShowPasswordButton
            onPress={() => setVisiblePassword(!visiblePassword)}
          >
            <Feather
              name={visiblePassword ? "eye-off" : "eye"}
              color={`${theme.colors.primary}`}
              size={25}
            />
          </ShowPasswordButton>
        )}
      </InputWrapper>
      <AlertText>{error || " "}</AlertText>
    </Container>
  );
}
