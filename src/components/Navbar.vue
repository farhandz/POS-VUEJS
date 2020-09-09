<template>
<nav>
      <ul>
        <li
        style="cursor: pointer;"
        ype="button"
        data-toggle="modal"
        data-target="#modal2"
        ><img src="icon/add.png" alt="" v-b-modal.modal-2 /></li>
        <li><router-link :to="{path: '/menu'}" exact> <img src="icon/clipboard.png" alt="" /></router-link></li>
        <li><a href="/dashboard.html"><img src="icon/fork (1).png" alt="" /></a></li>
      </ul>
      <AddModal />
    </nav>
    <!-- <Content /> -->
</template>

<script>
import AddModal from '../components/AddModal'
// import Content from './Content'
export default {
  components: {
    AddModal
  }
}
</script>

<style>

</style>
