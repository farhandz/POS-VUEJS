<template>
  <div>
    <b-modal id="modal-2" title="BootstrapVue">
       <form @submit.prevent="SubmitForm" enctype="multipart/form-data" >
              <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >name</label
                >
                <div class="col-sm-10">
                  <input
                  v-model="name"
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    placeholder="name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label  for="inputPassword" class="col-sm-2 col-form-label"
                  >image</label
                >
                <div class="col-sm-10">
                  <input
                  @change="uploadfile"
                    type="file"
                    class="form-control"
                    placeholder="image"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword"  class="col-sm-2 col-form-label"
                  >price</label
                >
                <div class="col-sm-10">
                  <input
                    v-model="price"
                    type="text"
                    class="form-control"
                    id="inputPassword"
                    placeholder="price"
                  />
                </div>
              </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">select category</label>
            <select @change="selectCategory" class="form-control" id="exampleFormControlSelect1">
              <option v-for="(item, index) in getCategory" :key="index" :value="item.id" >{{item.nama_kategori}}</option>
            </select>
          </div>
              <button>add</button>
            </form>
    </b-modal>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      price: '',
      category: '',
      getCategory: null,
      files: '',
      inputCategory: ''
    }
  },
  name: 'AddModal',
  methods: {
    uploadfile: function (e) {
      this.files = e.target.files[0]
    },
    selectCategory: function (e) {
      this.inputCategory = e.target.value
    },
    SubmitForm: function () {
      const formData = new FormData()
      formData.append('image', this.files, this.files.name)
      formData.append('title', this.name)
      formData.append('harga', this.price)
      formData.append('id_category', this.inputCategory)
      axios.post('http://localhost:3000/api/produk', formData, {
      }).then(dt => {
        window.location = '/'
        // const status = JSON.parse(dt.data.response.status)
        // if (status === '200') {
        //   self.$router.push('/')
        // }
      })
    },
    categoryGet: function () {
      axios.get('http://localhost:3000/api/category')
        .then(dt => {
          this.getCategory = dt.data
        })
    }
  },
  mounted () {
    this.categoryGet()
  }
}
</script>

<style>

</style>
