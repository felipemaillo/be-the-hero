const connection = require('../database/connection');

module.exports = {
    async create (request, response) {
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization; //sempre que for utilizar um dado do usuario logado, o recomendado é utilizar desta forma, assim fica mais seguro.

        //conexão com o banco de dados - verificar a conexao no arquivo connection dentro da pasta database
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
    
        return response.json({ id });
    },

    async index (request, response) {
        const { page = 1} = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .select(['incidents.*', 
                'ongs.name', 
                'ongs.city', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.uf'])
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5);
        
        response.header('X-Total-Count', count['count(*)']); //retorna pelo header o níumero de registros encontrados

        return response.json(incidents);
    },

    async delete (request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        
        //meu
        const incidents = await connection('incidents')
            .where('id', id)
            .where('ong_id', ong_id)
            .delete();

        if (incidents == 0){
            //return response.json('Erro ao deletar o registro!');
            return response.status(401).json({ error: 'Operation not permitted.'});
        }else{
            //return response.json('Registro deletado com sucesso!');
            return response.status(204).send(); //Sucesso, mas não tem consteúdo para retornar
        }

        /** AULA
        const incidents = await connection('incidents')
            .where('id', id) //Condição
            .select('ong_id') //Pega somente o campo ong_id
            .first(); //Pega o primeiro registro

        if (incidents.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        const incidents = await connection('incidents').where('id', id).delete();
        return response.status(204).send(); //Sucesso, mas não tem consteúdo para retornar
        */
    }
}