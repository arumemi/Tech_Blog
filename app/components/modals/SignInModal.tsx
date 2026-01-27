"use client";
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal";
import { useModalStore } from "@/app/store/useModalStore";
import { FaGithub } from "react-icons/fa6";

export default function SignInModal() {
  const { isOpen, closeSignIn } = useModalStore();

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeSignIn}>
      <h2 className="text-xl font-semibold text-white mb-2">Fazer Login</h2>
      <p className="text-gray-400 text-sm mb-8">
        Continue com um provedor de login para acessar sua conta.
      </p>
        {/* Botões de login */}
        <div className="flex flex-col gap-4">
            <button className="w-full bg-white hover:bg-blue-600 text-black px-4 py-2 rounded-md font-medium transition-colors duration-300">
                <FcGoogle className="inline-block mr-2 text-2xl" />
                Continuar com Google
            </button>
            <button className="w-full bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300">
                <FaGithub className="inline-block mr-2 text-2xl" />
                Continuar com GitHub
            </button>
        </div>
        <p className="text-gray-500 text-center text-xs mt-8">Ao continuar, você concorda com nossos termos e condições. </p>
    </Modal>
  );
}
