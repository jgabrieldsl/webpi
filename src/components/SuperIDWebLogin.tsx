import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const SuperIDWebLogin = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-screen h-screen flex bg-white">
      {/* Left side - gray area */}
      <div className="w-1/2 flex">
        <div className="flex w-full h-full min-h-screen bg-[#D9D9D9]"></div>
      </div>

      {/* Right side - login form */}
      <div className="flex w-1/2 items-center justify-center bg-white md:p-12 lg:p-16 xl:p-24">
        <div className="flex flex-col justify-start w-full max-w-md mx-auto">
          {/* Logo */}
          <img
            src="/ic_launcher-playstore 2.png"
            className="w-24 h-24 object-contain object-center rounded-[20px]"
            alt="SuperID Logo"
          />

          <div className="flex flex-col items-stretch justify-center w-full mt-8">
            <div className="flex flex-col items-stretch justify-start w-full">
              {/* Welcome text */}
              <div className="flex flex-col items-stretch justify-center self-start">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#1E232C]">
                  Bem vindo de volta ao SuperID Web
                </h1>
                <p className="text-[#8391A1] text-base font-normal self-start">
                  Faça o login para continuar
                </p>
              </div>

              {/* SuperID App login button */}
              
                  
                  <Dialog>
                  <DialogTrigger>
                    <button className="flex items-center justify-center gap-3 w-full mt-8 px-8 py-3 text-base text-center text-[#8391A1] font-normal border border-solid border-[#4600c9] rounded-full">
                      <img
                        src="/ic_launcher-playstore 2.png"
                        className="w-6 h-6 object-contain object-center rounded-full"
                        alt="SuperID App Icon"
                      />
                      <span className="text-[#8391A1] ">
                        Continuar com Super ID App
                      </span>
                  </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Login fácil, entre com o SuperID App</DialogTitle>
                      <DialogDescription>
                        Abra o aplicativo, faça login com seu usuário e senha, localize a
                                        opção "SuperID Web", selecione "Escanear QR Code" e aponte
                                        a câmera do seu dispositivo para o QR Code abaixo.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
            </div>
            


            {/* Divider */}
            <div className="text-[#8391a1] text-sm font-normal text-center self-center mt-8">
              ------------- ou entre com seu email e senha -------------
            </div>

            {/* Login form */}
            <form className="mt-8 w-full">
              {/* Email input */}
              <div className="w-full">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full text-[15px] text-[#8391A1] font-medium rounded-full border border-[#E8ECF4] bg-[#F7F8F9] px-6 py-4 outline-none"
                />
              </div>

              <div className="mt-4 w-full">
                {/* Password input */}
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    className="w-full text-[15px] text-[#8391A1] font-medium rounded-full border border-[#E8ECF4] bg-[#F7F8F9] px-6 py-4 pr-12 outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img
                      src="/eyeicon.png"
                      className="w-5 h-5 object-contain"
                      alt="Show/Hide Password"
                    />
                  </button>
                </div>

                {/* Forgot password link */}
                <div className="text-right mt-3">
                  <a href="#" className="text-[#6A707C] text-sm font-semibold">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full mt-8 py-4 text-white text-lg font-semibold rounded-full bg-[#4500C9] hover:bg-[#3b00ab] transition-colors"
              >
                Entrar
              </button>
            </form>

            {/* Registration link */}
            <div className="flex items-center justify-center gap-2 mt-16 md:mt-24 text-base text-center">
              <span className="text-[#1E232C] font-medium">
                Não tem uma conta?
              </span>
              <a href="#" className="text-[#4500C9] font-bold">
                Registre-se
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperIDWebLogin