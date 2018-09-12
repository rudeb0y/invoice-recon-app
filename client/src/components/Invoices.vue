<template>
 <v-data-table header-text="Interface Validation Invoices"
    :headers="headers"
    :items="Invoices"
    hide-actions
    select-all
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-right">{{ props.item.EventId }}</td>
      <td>{{ props.item.ClientOrderRef }}</td>
      <td>{{ props.item.EventSource }}</td>
      <td>{{ props.item.FailureType }}</td>
      <td>{{ props.item.FailureText }}</td>
      <!-- <td><v-btn >Ignore</v-btn></td> -->
    </template>

  </v-data-table>
</template>
<script>
import InvoicesService from '@/services/InvoicesService'
export default {
  name: 'Invoices',
  data () {
    return {
      headers: [
        // {
        //   text: 'id',
        //   align: 'center',
        //   sortable: false,
        //   value: 'name'
        // },
        { text: 'Event ID', value: 'EventId', align: 'right' },
        { text: 'Client Job Ref', value: 'ClientOrderRef' },
        { text: 'Event Source', value: 'EventSource' },
        { text: 'Failure Type', value: 'FailureType' },
        { text: 'Reasons', value: 'Reasons' }
      ],
      Invoices: []
    }
  },
  beforeMount () {
    this.getInvoices()
  },
  methods: {
    async getInvoices () {
      const response = await InvoicesService.fetchInvoices()
      this.Invoices = response.data
    },
    async ignore (id) {
      await InvoicesService.ignoreFailure(id)
      this.getInvoices()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
