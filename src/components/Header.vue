<template>
  <header>
      <div class="content-head1">
        <div  class="ctn-search1"  style="cursor: pointer;">
          <img @click="data" src="icon/menu (1).svg" alt="" />
        </div>
        <div class="ctn1">Food Items</div>
        <div class="ctn1">
           <b-row>
            <b-col class="ml-4"  variant="success"><b-form-input @keyup="serch" placeholder="Search"></b-form-input></b-col>
            <b-row>
                  <b-form-select @change="sort" size="sm" v-model="selected" class=" mt-1 ml-2" :options="options"></b-form-select>
                  <span class="mx-auto" style="font-size: 15px">sort by {{selected}}</span>
            </b-row>
        </b-row>
        </div>
        <div class="ctn1">
        <b-row>
          <b-col><b-icon icon="shop"  variant="success" scale="2"> </b-icon></b-col>
          <b-col><h1 variant="success"  >{{cart.length}}</h1></b-col>
        </b-row>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  props: ['data', 'serch', 'sort', 'cart'],
  data () {
    return {
      isActive: false,
      selected: null,
      options: [
        { value: 'harga', text: 'harga' },
        { value: 'title', text: 'title' }
      ]
    }
  },
  computed: {
    haiTayo: function () {
      return {
        active: false
      }
    }
  }
}
</script>
