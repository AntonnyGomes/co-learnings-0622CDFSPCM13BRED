let cinema = 'CineHouse';
let catalogo = require('./database/catalogo.json');

let adicionarFilme = filme => catalogo.push(filme);

adicionarFilme({
    codigo: 4,
    titulo: "Vingadores Ultimato",
    duracao: 2.5,
    atores:["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
    anoDeLancamento: 2019,
    emCartaz: false
});

let buscarFilme = codigo => {
    return catalogo.find(filme => filme.codigo === codigo);
}

let alterarStatusEmCartaz = codigo => {
    let filmeBuscado = buscarFilme(codigo);

    // filmeBuscado.emCartaz ? filmeBuscado.emCartaz = false : filmeBuscado.emCartaz = true;

    if (filmeBuscado) {
        filmeBuscado.emCartaz = !filmeBuscado.emCartaz;
    }

    return filmeBuscado;
}

// console.log(alterarStatusEmCartaz(3));
// console.log(alterarStatusEmCartaz(3));

let listarTodosOsFilmes = (filmes) => {
    filmes.forEach(filme => {
        console.log(`
        Filme: ${filme.titulo}
        Duracao: ${filme.duracao}hrs
        Atores: ${filme.atores}
        Ano de lancamento: ${filme.anoDeLancamento}
        Em cartaz: ${filme.emCartaz ? 'Sim' : 'Nao'}
        `);
    });
}

// listarTodosOsFilmes(catalogo);

let listarFilmesEmCartaz = () => {
    let filmesEmCartaz = catalogo.filter(filme => filme.emCartaz);
    listarTodosOsFilmes(filmesEmCartaz);
}

// listarFilmesEmCartaz();

let listarFilmesDeLongaDuracao = () => {
    let filmesDeLongaDuracao = catalogo.filter(filme => filme.duracao >= 2);
    listarTodosOsFilmes(filmesDeLongaDuracao);
}

listarFilmesDeLongaDuracao();
