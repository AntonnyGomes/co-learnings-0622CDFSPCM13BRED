// importando o express
const express = require('express');

const indexRouter = require('./routers/IndexRouter');

// criar constante app que armazenara a execucao do modulo express
const app = express();

// definindo o ejs como linguagem de templates
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', indexRouter);

// rodando a aplicacao na porta 3000
app.listen(3000, () => console.log('DHNews rodando...'));
