"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// Components
import { Button, Input } from "@nextui-org/react";
// Schema
import { recoveryData, recoverySchema } from "./schema/recoverySchema";
// Services
import authService from "@/app/common/services/auth.service";
import { toast } from "react-toastify";

const Recovery = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<recoveryData>({
    resolver: zodResolver(recoverySchema),
  });

  const onSubmit = async (data: recoveryData) => {
    try {
      await authService.recoveryPassword(data.email);
      toast.success("Email de recuperação enviado com sucesso!");
    } catch (error) {
      console.error("Error when we tried to recovery password", error);
      toast.error(
        "Ocorreu um erro ao tentar enviar o email, tente novamente mais tarde!"
      );
    }
  };
  return (
    <main className="p-4">
      <h1 className="text-secondary text-2xl font-bold mb-4">
        Recuperação de senha
      </h1>
      <p className="mb-4 text-black">
        Enviaremos um email com as instruções de recuperação de senha!
      </p>
      <form
        className="flex flex-col gap-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          isRequired
          type="email"
          label="Email"
          isInvalid={!!errors.email?.message}
          placeholder="Insira seu email"
          {...register("email")}
          errorMessage={errors?.email && (errors?.email?.message as string)}
        />
        <Button
          type="submit"
          className="bg-secondary text-white text-xl"
          isLoading={isSubmitting}
          isDisabled={isSubmitting || !isValid}
        >
          Enviar
        </Button>
      </form>
    </main>
  );
};

export default Recovery;
