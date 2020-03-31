const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//Session
routes.post('/sessions', SessionController.create); //Verifica se a ong esta cadastrada.

//ONGS
routes.get('/ongs', OngController.index); //para listar as ongs cadastradas
routes.post('/ongs', OngController.create); //para gravar no banco a ong

//Incidents
routes.get('/incidents', IncidentController.index); //para listar os incidents cadastrados
routes.post('/incidents', IncidentController.create); //para gravar no banco o incident
routes.delete('/incidents/:id', IncidentController.delete); //para deletar um incident

//Profiles
routes.get('/ProfileIncidentsONG', ProfileController.index); //para listar os incidents cadastrados de uma ong específica
module.exports = routes;