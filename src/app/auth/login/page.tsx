"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Components
import { Button, Input, Link } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@/app/common";
// Schema
import { loginFormData, loginSchema } from "./schemas/loginSchema";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const onSubmit = (data) => {
    console.log("HADOUKEN DATA", data);
  };

  return (
    <main className="p-4">
      <h1 className="text-secondary text-2xl font-bold mb-4">
        Faça login para continuar
      </h1>
      <form
        className="flex flex-col gap-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          isRequired
          type="email"
          label="Email"
          placeholder="Insira seu email"
          {...register("email")}
          errorMessage={errors?.email && (errors?.email?.message as string)}
        />
        <Input
          label="Password"
          placeholder="Insira sua senha"
          {...register("password")}
          errorMessage={
            errors?.password && (errors.password?.message as string)
          }
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
        <Button type="submit" className="bg-secondary text-white text-xl">
          Logar
        </Button>
      </form>
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
