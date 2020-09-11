<template>
  <div>
  <b-modal id="modal-1">
       <div class="modal-header">
            <div class="mdl1">
              <p class="font-weight-bold">Checkout</p>
              <p>Cashier : Pevita Pearce</p>
            </div>
            <div class="mdl2">
              <p class="font-weight-bold">Receipt no: #010410919</p>
            </div>
          </div>
          <div class="modal-body">
             <div v-for="(item, index) in cart" :key="index" class="mdl-body">
              <div class="list-item">{{item.title}} {{item.qty}}x</div>
              <div class="price">{{item.harga * item.qty}}</div>
            </div>
            <div class="mdl-body">
              <div></div>
              <div class="price">total: {{ttl}}</div>
            </div>
            <div class="font-weight-bold">Payment Cash</div>
            <div class="mdl-button">
              <button @click="print" class="print">Print</button>
              <span class="font-weight-bold">or</span>
              <button class="print">Send Email</button>
            </div>
          </div>
  </b-modal>
</div>
</template>

<script>
import JsPDF from 'jspdf'
// import JsPDFAutotable from 'jspdf-autotable'
export default {
  props: ['cart'],
  data () {
    return {
      ttl: 0
    }
  },
  components: {
    // JsPDFAutotable
  },
  watch: {
    cart (cart) {
      this.ttl = cart.reduce((item, data) => {
        console.log(data)
        this.jmlttl = item + (data.harga * data.qty)
        return item + (data.harga * data.qty)
      }, 0)
    }
  },
  methods: {
    print: function () {
      const pdfName = 'hai ganteng'
      var doc = new JsPDF()
      doc.text('hello world', 10, 10)
      doc.save(pdfName + '.pdf')
    }
  }

}
</script>

<style>

</style>
