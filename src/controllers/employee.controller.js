const pool = require('../database/connection')

class employeeController{

    // post
    async create(req, res){
        try {
            const data = req.body;
            const sql = 'INSERT INTO employees (name, idnumber, indate, charge, status) VALUES ($1, $2, $3, $4, $5)'
            const values = [data.name, data.idNumber, data.inDate, data.charge, 'A']
            const response = await pool.query(sql, values)
            return res.json({msg: '¡Empleado Creado!', response})
        } catch (error) {
            console.log(error);
            return res.json({title: 'error', error: error});
        }
    }

    // async filter(req, res){
    //     try {
    //         const data = [] // query obtener empleados
    //         return res.json(data);
    //     } catch (error) {
    //         console.log(error);
    //         return res.json({title: 'error', error: error});
    //     }
    // }

    // get
    async get(req, res){
        try {
            const {rows} = await pool.query("SELECT e.*, c.name as charge_name FROM employees e, charges c where e.charge = c.id and e.status = 'A'")
            return res.json(rows);
        } catch (error) {
            console.log(error);
            return res.json({title: 'error', error: error});
        }
    }

    // put
    async update(req, res){
        try {
            const id = req.params.id;
            const data = req.body;
            const sql = 'UPDATE employees SET name = $1, idnumber = $2, indate = $3, charge = $4 where id = $5'
            const values = [data.name, data.idNumber, data.inDate, data.charge, id]
            const response = await pool.query(sql, values)
            return res.json({msg: '¡Empleado Actualizado!', response})
        } catch (error) {
            console.log(error);
            return res.json({title: 'error', error: error});
        }
    }

    // delete
    async destroy(req, res){
        try {
            const id = req.params.id;
            const sql = 'UPDATE employees SET status = $1 where id = $2'
            const values = ['E', id]
            const response = await pool.query(sql, values)
            return res.json({msg: '¡Empleado Eliminado!'})
        } catch (error) {
            console.log(error);
            return res.json({title: 'error', error: error});
        }
    }

}

const c = new employeeController();

module.exports = c;