"use client";
import { useState } from "react";
// Components
import { Button, Input, Link } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/app/common";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <main className="p-4">
      <h1 className="text-secondary text-2xl font-bold mb-4">
        Faça login para continuar
      </h1>
      <section className="flex flex-col gap-8 mb-4">
        <Input isRequired type="email" label="Email" />
        <Input
          label="Password"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isPasswordVisible ? "text" : "password"}
        />
        <Link href="#" className="text-secondary">
          Esqueceu a senha?
        </Link>
        <Button className="bg-secondary text-white text-xl">Logar</Button>
      </section>
      <p className="text-secondary text-center mb-4">Ou</p>
      <section className="flex flex-col gap-4">
        <Button variant="ghost" className=" text-secondary text-xl">
          Entrar com o google
        </Button>
        <Link href="#" className="text-secondary">
          Não possui uma conta? Cadastre-se
        </Link>
      </section>
    </main>
  );
};

export default Login;
