export function validateInputText(text: string): string {
  if (text === "") {
    return "Nome é obrigatório";
  }
  return "";
}

export function validateInputEmail(email: string): string {
  if (email === "") {
    return "Email é obrigatório";
  }
  if (!email.includes("@")) {
    return "Inclua um @ no email.";
  }
  return "";
}

export function validateInputPassword(
  password1: string,
  password2: string
): string {
  if (password1 === "") {
    return "Senha é obrigatória";
  }
  if (password1.length < 6) {
    return "Senha deve ter no mínimo 6 caracteres";
  }
  if (password1 !== password2) {
    return "Senhas não conferem";
  }
  return "";
}
