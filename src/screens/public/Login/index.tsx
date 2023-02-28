import React, { useCallback } from "react";

import { useAuth, User } from "../../../context";

import { ButtonSubmit, Input, ModalError } from "../../../components";

import {
  ContainerLogin,
  IconBackground,
  LogoIcon,
  Title,
  LoginContent,
  Content,
} from "./styles";

import {
  setStorage,
  validateInputEmail,
  validateInputPassword,
} from "../../../utils";

import { getFirebaseData, signIn } from "../../../services";

import { CentralizeView } from "../../../global/styles/theme";

export function Login() {
  const { setUser, auth, firestore } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [loadingModal, setLoadingModal] = React.useState(false);
  const [modalErrorVisible, setModalErrorVisible] = React.useState(false);
  const [modalTitleError, setModalTitleError] = React.useState("");
  const [modalTextError, setModalTextError] = React.useState("");

  const checkErrors = React.useCallback(() => {
    setError(["", "", ""]);

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

  const handleLogin = React.useCallback(async () => {
    if (!checkErrors()) return;

    modalErrorVisible ? setLoadingModal(true) : setLoading(true);

    await signIn(auth, email, password)
      .then((value) => {
        getFirebaseData(firestore, 'users', value.user.uid).then((res) => {
          const data = res.data();
          const user: User = {
            userId: data?.userId,
            colors: data?.colors,
          }
          setStorage("user", user).then(() => {
            setUser(user);
          });
        }).catch(() => {
          setModalTitleError("Erro de Login");
          setModalTextError(
            "Ocorreu um erro ao fazer o login, tente novamente mais tarde"
          );
          setModalErrorVisible(true);
        });
      })
      .catch((err) => {
        if(err.code === "auth/user-not-found") {
          return setError(["Email não encontrado", ""]);
        } else if (err.code === "auth/wrong-password") {
          return setError(["", "Senha incorreta"]);
        } else if (err.code === "auth/too-many-requests") {
          setModalTitleError("Muitas tentativas");
          setModalTextError("Você tentou fazer login muitas vezes, tente novamente mais tarde.");
        } else {
          setModalTitleError("Erro de Login");
          setModalTextError(
            "Ocorreu um erro ao fazer o login, tente novamente mais tarde"
          );
        }
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
        </Content>
      </LoginContent>

      <ModalError
        title={modalTitleError}
        text={modalTextError}
        isVisible={modalErrorVisible}
        isLoading={loadingModal}
        onClose={() => setModalErrorVisible(false)}
        transparent
        onConfirm={handleLogin}
      />
    </ContainerLogin>
  );
}
