import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {

    const erros: string[] = [];

    if (!evento.alias) {
        erros.push('O alias do evento deve ser informado.');
    }

    if (!evento.nome) {
        erros.push('O nome do evento deve ser informado.');
    }

    if (!evento.descricao) {
        erros.push('A descricao do evento deve ser informada.');
    }

    if (!evento.data) {
        erros.push('A data do evento deve ser informada.');
    }

    if (!evento.local) {
        erros.push('O local do evento deve ser informado.');
    }

    if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
        erros.push('O publico esperado do evento deve ser informado.');
    }

    if (!evento.imagem) {
        erros.push('A imagem do evento deve ser informada.');
    }

    if (!evento.imagemBackground) {
        erros.push('A imagem de background do evento deve ser informada.');
    }

    return erros;
}