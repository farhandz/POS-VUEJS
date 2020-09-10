<template>
     <main>
      <div class="image">
        <div v-for="(item, index) in title" :key="index" class="tayo">
          <div class="menu-image">
            <img :src="`http://localhost:3000/${item.image}`"  alt="" />
            <p>{{item.title}}</p>
            <h1>Rp.{{item.harga}}</h1>
             <b-button  @submit.prevent="delete1(index)" @click="delete1(item, index)" size="sm" variant=dark class="mb-2">
                <b-icon icon="trash-fill" aria-label="Help"></b-icon>
            </b-button>
             <b-button  size="sm" variant=dark class=" ml-2 mb-2">
              <router-link :to="{ path: `/${item.id}` }"><b-icon icon="pencil-square" aria-label="Help"></b-icon></router-link>
            </b-button>
             <b-button   @click="onBuy(item.id)" size="sm" variant=dark class=" ml-2 mb-2">
                <b-icon icon="cart4" aria-label="Help"></b-icon>
            </b-button>
          </div>
        </div>
      </div>
    </main>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  props: ['data', 'serch', 'sort', 'onBuy'],
  data () {
    return {
      nama: 'farhan ammar',
      title: null,
      active: false,
      logic: '',
      item: ''
    }
  },
  methods: {
    Clastole: function ($event, index) {
      const data = document.querySelectorAll('.tayo')
      const data2 = [...data]
      data2.forEach((dt) => {
        dt.addEventListener('click', function () {
          dt.classList.toggle('content-image')
        })
      })
    },
    delete1: function (item, id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            axios.delete('http://localhost:3000/api/produk/' + item.id)
              .then(response => {
                console.log(response)
              })
            swal('Poof! Your imaginary file has been deleted!', {
              icon: 'success'
            })
            setTimeout(() => {
              window.location = '/'
            }, 2000)
          } else {
            swal('Cancel Delete Produk!!')
          }
        })
    }
  },
  computed: {
    axiosParams: function () {
      const params = new URLSearchParams()
      params.append('search', this.serch)
      params.append('sort', this.sort)
      return params
    }
  },
  watch: {
    // sort: function (value, cb) {
    //   return cb(value)
    // },
    serch: function (value) {
      axios.get('http://localhost:3000/api/produk?search=' + value)
        .then(dt => {
          this.title = dt.data
        })
    },
    sort: function () {
      axios.get('http://localhost:3000/api/produk', {
        params: this.axiosParams
      })
        .then(dt => {
          this.title = dt.data
        })
    }
  },
  mounted () {
    console.log(this.sort)
    axios.get('http://localhost:3000/api/produk')
      .then(dt => {
        this.title = dt.data
      })
  }
}
</script>

<style>

</style>
