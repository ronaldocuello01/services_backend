const pool = require('../database/connection')

class chargeController{

    // post
    async create(req, res){
        try {
            const data = req.body;
            const sql = 'INSERT INTO charges (name, status) VALUES ($1, $2)'
            const values = [data.name, 'A']
            const response = await pool.query(sql, values)
            return res.json({msg: 'Cargo Creado!', response})
        } catch (error) {
            console.log(error);
            return res.json({title: 'error', error: error});
        }
    }

    // get
    async get(req, res){
        try {
            const { rows } = await pool.query("SELECT * FROM charges where status = 'A'")
            return res.json(rows);
        } catch (error) {
            console.log(error);
            return res.json({title: 'error', error: error});
        }
    }


}

const c = new chargeController();

module.exports = c;