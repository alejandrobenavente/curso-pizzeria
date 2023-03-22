var pool = require('./bd');

async function getpromociones() {
    
        var query = 'select * from promociones';
        var rows = await pool.query(query);
        return rows;
    }

    async function deletePromocionesById() {
    
        var query = 'DELETE FROM promociones where id = ?';
        var rows = await pool.query(query, [id]);
        return rows;
}

module.exports = { deletePromocionesById, getpromociones }