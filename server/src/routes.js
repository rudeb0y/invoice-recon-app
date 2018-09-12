const InvoicesController = require('./controllers/InvoicesController');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({
      message: 'you made it',
    });
  });
  app.get('/invoices', InvoicesController.fetchInvoices);
  app.get('/invoices/:id', InvoicesController.getInvoice);
  // app.put('/invoices/:id', InvoicesController.ignoreInvoice)
};
