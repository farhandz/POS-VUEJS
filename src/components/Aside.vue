<template>
   <aside :class="{ side: true, 'slider': isActive }">
     <div v-if="cart.length === 0" class="non-active">
       <div  class="content-aside">
            <img style="width: 230px" src="image/if cart empty.png" alt="">
        </div>
        <button @click="data" ><b-icon icon="box-arrow-in-up-right" variant="dark" aria-hidden="true"></b-icon></button>
     </div>
     <div v-else class="active">
        <div class="aside-nav">
        <div @change="ct"  v-for="(item, index) in cart" :key="index" class="tayo-nav">
          <div class="ty-1"><img src="image/b-mini.png" alt="" /></div>
          <div class="ty-2">
            <h1>{{item.title}}</h1>
            <div class="jml">
              <div><button @change="dec" @click="kurang(index)">-</button></div>
              <div><span>{{item.qty}}</span></div>
              <div><button @change="inc" @click="tambah(index)">+</button></div>
            </div>
          </div>
          <div :value="item.harga * item.qty"  class="ty-3">Rp. {{item.harga * item.qty}}</div>
        </div>
      </div>
      <div class="aside-nav2">
        <div class="total">
          <div class="ttl-hrg">
            <h1>total</h1>
            <span>*belum termasuk pajak</span>
          </div>
          <div class="ttl-jml"><h1>Rp. {{ttl}}</h1></div>
        </div>
        <div class="checkout">
         <b-button v-b-modal.modal-1>Launch demo modal</b-button>
          <button @click="data" class="ctn-search" id="cnc">Cancel</button>
        </div>
      </div>
     </div>
    </aside>
</template>

<script>
export default {
  props: ['isActive', 'data', 'cart', 'ct'],
  data () {
    return {
      qty: null,
      crt: [],
      inc: 1,
      dec: 1,
      ttl: 0,
      jmlttl: 0
    }
  },
  methods: {
    tambah: function (index) {
      const idCart = this.cart[index].id
      const plus = this.cart.filter(el => {
        if (idCart === el.id) {
          el.qty += 1
        }
        return el
      })
      this.cart = plus
    },
    kurang: function (index) {
      const idCart = this.cart[index].id
      const mines = this.cart.filter(el => {
        if (idCart === el.id) {
          if (el.qty <= 1) {
            this.dec = this.cart[index].qty += +1
            el.qty = 1
          } else {
            el.qty -= 1
          }
        }
        return el
      })
      this.cart = mines
    },
    data2: function () {
      window.location = '/'
    }
  },
  watch: {
    cart (data) {
      console.log(data)
      this.ttl = data.reduce((item, data) => {
        return item + (data.harga * data.qty)
      }, 0)
    }
  }

}
</script>
