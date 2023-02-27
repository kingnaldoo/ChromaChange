import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { useAuth, User } from "../../../context";

import { ButtonSubmit, Input, ModalError } from "../../../components";

import {
  ContainerLogin,
  IconBackground,
  LogoIcon,
  Title,
  LoginContent,
  TopContent,
  Content,
} from "./styles";

import {
  setStorage,
  validateInputEmail,
  validateInputPassword,
} from "../../../utils";

import { signIn } from "../../../services";

import { CentralizeView } from "../../../global/styles/theme";

export function Login() {
  const { navigate } = useNavigation();
  const { setUser, auth } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [loadingModal, setLoadingModal] = React.useState(false);
  const [modalErrorVisible, setModalErrorVisible] = React.useState(false);

  const checkErrors = useCallback(() => {
    if (
      !validateInputEmail(email) &&
      !validateInputPassword(password, password)
    )
      return true;

    setError([
      validateInputEmail(email),
      validateInputPassword(password, password),
    ]);
  }, [email, password]);

  const handleLogin = useCallback(async () => {
    if (!checkErrors()) return;

    modalErrorVisible ? setLoadingModal(true) : setLoading(true);

    await signIn(auth, email, password)
      .then((value) => {
        const user: User = {
          userId: value.user.uid,
          email: value.user.email || "",
          password: password,
        }
        setStorage("user", user);
        setUser(user);
      })
      .catch(() => {
        setModalErrorVisible(true);
      })
      .finally(() => {
        setLoadingModal(false);
        setLoading(false);
      });
  }, [checkErrors, email, modalErrorVisible, password, setUser]);

  return (
    <ContainerLogin>
      <IconBackground />

      <LoginContent>
        <Content>
          <TopContent>
            <CentralizeView>
              <LogoIcon />
              <Title>Login</Title>
            </CentralizeView>

            <Input
              title="Email"
              placeholder="Ex: pedroaugusto@gmail.com"
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)}
              error={error[0]}
            />
            <Input
              title="Senha"
              placeholder="************"
              isPassword
              value={password}
              onChangeText={(value) => setPassword(value)}
              error={error[1]}
            />

            <CentralizeView>
              <ButtonSubmit
                title="Fazer Login"
                onPress={handleLogin}
                loading={loading}
              />
            </CentralizeView>
          </TopContent>
        </Content>
      </LoginContent>

      <ModalError
        title="Erro ao criar conta"
        text="Ocorreu um erro ao criar sua conta, tente novamente mais tarde"
        isVisible={modalErrorVisible}
        isLoading={loadingModal}
        onClose={() => setModalErrorVisible(false)}
        transparent
        onConfirm={handleLogin}
      />
    </ContainerLogin>
  );
}
