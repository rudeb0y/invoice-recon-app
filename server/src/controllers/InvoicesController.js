/**
 * Define how to interact with Invoices
 */
const sql = require('mssql');

module.exports = {
  // Get all  Invoices
  async fetchInvoices(req, res) {
    try {
      const request = new sql.Request();
      const {
        recordset,
      } = await request
        .query('select * from invoices; select 123 as silly_message');

      res.send(recordset);
    } catch (err) {
      res.status(500).send({
        error: `An error occurred whilst trying to fetch all Invoices - ${err.message}`,
      });
      console.error(err);
    }
  },
  // Get a single  invoice
  async getInvoice(req, res) {
    try {
      const request = new sql.Request();
      const {
        recordset,
      } = await request
        .input('id', sql.Int, req.params.id)
        .query('select * from dbo.invoices where id = @id');

      res.send(recordset);

    } catch (err) {
      res.status(500).send({
        error: `Could not retrieve invoice with id: ${req.params.id} - ${err.message}`,
      });
    }
  },
  async ignoreinvoice(req, res) {
    try {
      const request = new sql.Request();
      const {
        recordset,
      } = await request
        .query('select * from invoices');

      res.send(recordset);

    } catch (error) {
      res.status(500).send({
        message: `Could not update invoice with id: ${req.params.id}`,
        error,
      });
    }
  },
};
