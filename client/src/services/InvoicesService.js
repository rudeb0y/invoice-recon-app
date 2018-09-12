import Api from './API';

export default {
  fetchInvoices() {
    return Api().get('Invoices');
  },
  ignoreInvoice(id) {
    return Api().put(`Invoices/${id}`);
  },
};
