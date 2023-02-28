export function validateInputText(text: string): string {
  return (/^\s*$/.test(text)) ? "Nome é obrigatório" : ""
}

export function validateInputEmail(email: string): string {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return !emailRegex.test(email) ? "Email inválido." : "";
}

export function validateInputPassword(
  password1: string,
  password2: string
): string {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
  if (password1 === "") {
    return "Senha é obrigatória";
  }
  if (!passwordRegex.test(password1)) {
    return "Senha deve ter pelo menos 6 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial (!@#$%^&*)";
  }
  if (password1 !== password2) {
    return "Senhas não conferem";
  }
  return "";
}
