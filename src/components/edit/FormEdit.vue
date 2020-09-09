<template>
<form @submit.prevent="submitedit">
  <div  class="form-group">
    <label>image</label>
    <input  @change="imageFile" type="file" class="form-control" >
  </div>
  <div class="form-group">
    <label>title</label>
    <input   type="text" v-model="produk.title" class="form-control">
  </div>
  <div class="form-group">
    <label>{{this.produk.title}}</label>
    <input type="number" v-model="produk.harga" class="form-control" >
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">{{this.$route.params.id}}</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
    </select>
  </div>
  <button type="submit">add</button>
</form>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data () {
    return {
      produk: {}
    }
  },
  methods: {
    imageFile: function (e) {
      this.produk.image = e.target.files[0]
    },
    submitedit: function () {
      const formData = new FormData()
      formData.append('image', this.produk.image)
      formData.append('title', this.produk.title)
      formData.append('harga', this.produk.harga)
      formData.append('id_category', 2)
      axios.put('http://localhost:3000/api/produk/' + this.$route.params.id, formData, {
      }).then(dt => {
        swal({
          title: 'Good job!',
          text: 'Success add Produk',
          icon: 'success',
          button: 'Aww yiss!'
        })
        setTimeout(() => {
          window.location = '/'
        }, 2000)
      })
    }
  },
  props: ['id'],
  mounted () {
    axios.get('http://localhost:3000/api/produk/' + this.$route.params.id)
      .then(dt => {
        this.produk = dt.data[0]
      })
  }

}
</script>

<style>

</style>
