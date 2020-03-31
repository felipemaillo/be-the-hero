const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); //faz uma criptografia para gerar um id string automaticamente. não esquecer de colcoar a biblioteca no inicio.
    
        //conexão com o banco de dados - verificar a conexao no arquivo connection dentro da pasta database
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return response.json({ id });
    },

    async index (request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    }
}