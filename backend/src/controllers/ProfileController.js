const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const { page = 1 } = request.query;

        const ong_id = request.headers.authorization;
        
        const [count] = await connection('incidents').count().where('ong_id', ong_id);
        
        const incidents = await connection('incidents')
            .select(['incidents.*', 
                'ongs.name', 
                'ongs.city', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.uf'])
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .where('ong_id', ong_id)
            .limit(5)
            .offset((page - 1) * 5);
        
        response.header('X-Total-Count', count['count(*)']); //retorna pelo header o níumero de registros encontrados

        return response.json(incidents);
    }
}