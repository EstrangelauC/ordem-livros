import { error } from '@sveltejs/kit';
import autores from '../../../constants/autores.js';

export function load({ params }) {
    const autorId = params.id;
    const autor = autores.find(a => a.id === autorId);

    if (autor) {
        return { autor };
    }

    throw error(404, "Autor não encontrado");
}