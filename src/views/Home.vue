<template>
  <div class="container-wrapper">
   <Header :cart="cart"  :sort="dropdown"  :data="haitao" :serch='farhan' />
   <Navbar  />
   <Content :onBuy="onBuy" :serch='search' :sort="sort" :data="haitao" />
   <Aside :cart="cart" :ct="ct" :isActive = "isActive" :data="haitao" />
   <Footer />
   <Modal :cart="cart" :data="haitao" />
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import Modal from '../components/Modal'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Content from '../components/Content'
import Aside from '../components/Aside'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  data () {
    return {
      isActive: false,
      data: null,
      search: '',
      sort: '',
      cart: [],
      users: [],
      ct: 1,
      ttl: []
    }
  },
  methods: {
    haitao: function () {
      this.isActive = !this.isActive
    },
    farhan: function (e) {
      this.search = e.target.value
      // console.log(this.search)
    },
    dropdown: function (e) {
      this.sort = e
      // console.log(this.sort)
    },
    onBuy: function (id) {
      // const mar = [...this.cart]
      // this.ttl = [mar, this.users[0]]
      const cart = this.cart.filter((e) => e.id === id)
      if (cart.length === 0) {
        const data = this.users.filter((e) => e.id === id)
        data[0].qty = 1
        this.cart = [...this.cart, data[0]]
      } else {
        // cart.forEach(dt => { this.ct = (dt.qty += 1) })
        const cartData = this.cart.map(el => {
          if (el.id === id) {
            el.qty += 1
          }
          return el
        })
        this.cart = cartData
        console.log('ini', cart)
      }
    }
  },
  components: {
    Header,
    Navbar,
    Content,
    Aside,
    Footer,
    Modal
  },
  mounted () {
    axios.get('http://localhost:3000/api/produk')
      .then(dt => {
        this.users = dt.data
      })
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}
</script>
<style scoped>
@import '../assets/style.css';
</style>
