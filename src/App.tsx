import { useState } from 'react'

import {
  LeftSidePanel,
  Logo,
  WelcomeText,
  SuperIDAppButton,
  InputField,
  PasswordInput,
  SubmitButton,
  RegisterLink
} from '@/components'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="overflow-x-hidden">
      <div className="w-screen h-screen flex flex-col md:flex-row bg-white">
        <LeftSidePanel />
        <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-12">
          <div className="flex flex-col justify-start w-full max-w-md mx-auto">
            <Logo src="/ic_launcher-playstore 2.png" alt="SuperID Logo" />
            <div className="flex flex-col items-stretch justify-center w-full mt-8">
              <WelcomeText
                title="Bem vindo de volta ao SuperID Web"
                description="Faça o login para continuar"
              />
              <SuperIDAppButton
                iconSrc="/ic_launcher-playstore 2.png"
                buttonText="Continuar com Super ID App"
                dialogTitle="Login fácil, entre com o SuperID App"
                dialogDescription="Abra o aplicativo, faça login com seu usuário e senha, localize a opção 'SuperID Web', selecione 'Escanear QR Code' e aponte a câmera do seu dispositivo para o QR Code abaixo."
              />
              <div className="text-[#8391a1] text-sm font-normal text-center self-center mt-8">
                ------------- ou entre com seu email e senha -------------
              </div>
              <form className="mt-8 w-full">
                <InputField type="email" placeholder="E-mail" />
                <div className="mt-4 w-full">
                  <PasswordInput
                    showPassword={showPassword}
                    togglePassword={() => setShowPassword(!showPassword)}
                    placeholder="Senha"
                  />
                  <div className="text-right mt-3">
                    <a href="#" className="text-[#6A707C] text-sm font-semibold">
                      Esqueceu sua senha?
                    </a>
                  </div>
                </div>
                <SubmitButton text="Entrar" />
              </form>
              <RegisterLink
                text="Não tem uma conta?"
                linkText="Registre-se"
                linkHref="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
