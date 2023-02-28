import React, { ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  HeaderCenter,
  HeaderContainer,
  HeaderIcon,
  HeaderLeft,
  HeaderRight,
  HeaderTitle,
} from "./styles";

type HeaderProps = {
  title?: string;
  type?: "goback";
  headerCenter?: ReactNode;
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
};

export function Header({ title, type, headerCenter, headerLeft, headerRight }: HeaderProps) {
  const { goBack } = useNavigation();

  return (
    <HeaderContainer accessible>
      <HeaderLeft
        accessibilityLabel={type === "goback" ? "Voltar" : ""}
      >
        {headerLeft ||
          (type === "goback" && (
            <HeaderIcon name="arrow-left" onPress={goBack} />
          ))}
      </HeaderLeft>

      <HeaderCenter>
        {headerCenter || <HeaderTitle accessibilityLabel={title}>{title}</HeaderTitle>}
      </HeaderCenter>

      <HeaderRight>
        {headerRight}
      </HeaderRight>
    </HeaderContainer>
  );
}
