const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); /** Para que o app entenda o json que irá receber */
app.use(routes);

app.listen(3333);

/**
 * GET: Buscar/listar uma informação do back-end (Select)
 * POST: Criar uma informaçào no back-end (Insert)
 * PUT: Alterar uma informação no back-end (Update)
 * DELETE: Deletar uam informação no back-end (Delete)
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  *     const params = request.query;
  * Route Params: Parâmetros utilizados para identificar recursos
  *     const params = request.params;
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  *     cons params = request.body;
  */