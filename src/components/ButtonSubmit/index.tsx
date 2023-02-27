import React, { useState } from "react";
import { ActivityIndicator, TouchableHighlightProps } from "react-native";
import { theme } from "../../global/styles/theme";
import { Container, ButtonText } from "./styles";

interface ButtonSubmitProps extends TouchableHighlightProps {
  title: string;
  loading?: boolean;
}

export function ButtonSubmit({ title, loading, ...rest }: ButtonSubmitProps) {
  const [click, setClick] = useState(false);

  return (
    <Container
      onPressIn={() => setClick(true)}
      onPressOut={() => setClick(false)}
      style={{
        backgroundColor: click
          ? theme.colors.primaryLight
          : theme.colors.primaryDark,
      }}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.textWhite} />
      ) : (
        <ButtonText>{title}</ButtonText>
      )}
    </Container>
  );
}
