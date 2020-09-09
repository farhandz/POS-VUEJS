<template>
  <div class="container-wrapper">
   <Header :sort="dropdown"  :data="haitao" :serch='farhan' />
   <Navbar  />
   <FormEdit  />
   <!-- <Aside :isActive = "isActive" :data="haitao" /> -->
   <Footer />
   <Modal :data="haitao" />
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from '../components/Modal'
import Header from '../components/edit/Header'
import FormEdit from '../components/edit/FormEdit'

// import Header from '../components/Header'
import Navbar from '../components/Navbar'
// import Content from '../components/Content'
// import Aside from '../components/Aside'
import Footer from '../components/Footer'

export default {
  name: 'Home',
  data () {
    return {
      isActive: false,
      data: null,
      search: '',
      sort: '',
      idParams: ''
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
    }
  },
  components: {
    Header,
    Navbar,
    Footer,
    Modal,
    FormEdit
  },
  created () {
    this.idParams = this.$route.params.id
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
