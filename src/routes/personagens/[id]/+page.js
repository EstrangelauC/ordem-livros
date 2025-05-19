import { error } from '@sveltejs/kit';
import personagens from '../../../constants/personagens.js';

export function load({ params }) {
    const personagemId = params.id;
    const personagem = personagens.find(p => p.id === personagemId);

    if (personagem) {
        return { personagem };
    }

    throw error(404, "Personagem não encontrado");
}