import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function processarConvidado(convidado: Partial<Convidado>): Convidado {

    const erros = validarConvidado(convidado);

    if (erros.length > 0) {
        throw new Error(erros.join('\n'));
    }

    const temAcompanhantes = convidado.qtdeAcompanhantes
        && convidado.qtdeAcompanhantes > 0
        && convidado.possuiAcompanhantes
        && convidado.confirmado;

    const convidadoAtualizado = {
        ...convidado,
        qtdeAcompanhantes: temAcompanhantes ? convidado.qtdeAcompanhantes : 0,
        possuiAcompanhantes: temAcompanhantes,
    }

    return convidadoAtualizado as Convidado
}