"use-client"
import CampoEntrada from "../shared/CampoEntrada";

export interface FormLoginAdminProps {
  senha: string;
  email: string;
  setSenha: (senha: string) => void;
  setEmail: (email: string) => void;
  acessarEvento: () => void;
  acessarConta: () => void;
}

export default function FormLoginAdmin(props: FormLoginAdminProps) {
  return (
    <div
      className="flex flex-col items-center gap-4 bg-zinc-900 p-8
      rounded-lg shadow-lg w-[500px] border border-zinc-800"
    >
      <h1 className="text-3xl font-black">Bem-vindo(a)</h1>
      <h2 className="text-lg font-semibold -mt-3">Administrador</h2>
      <p className="text-sm text-zinc-400">
        Insira seus dados para acessar seu eventos
      </p>
      <CampoEntrada
        value={props.email}
        onChange={(e) => props.setSenha(e.target.value)}
        placeholder="Digite sua senha"
        type="email"
        outterClassName="w-full"
      />
      <CampoEntrada
        value={props.senha}
        onChange={(e) => props.setEmail(e.target.value)}
        placeholder="Digite seu email"
        type="senha"
        outterClassName="w-full"
      />
      <button className="botao azul" onClick={props.acessarConta}>
        Acessar Conta
      </button>
    </div>
  );
}
