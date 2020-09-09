<template>
   <aside :class="{ side: true, 'slider': isActive }">
      <div class="aside-nav">
        <div class="tayo-nav">
          <div class="ty-1"><img src="image/b-mini.png" alt="" /></div>
          <div class="ty-2">
            <h1>{{isActive}}</h1>
            <div class="jml">
              <div><button>-</button></div>
              <div><span>1</span></div>
              <div><button>+</button></div>
            </div>
          </div>
          <div class="ty-3">Rp. 15.000</div>
        </div>
        <div class="tayo-nav">
          <div class="ty-1"><img src="image/b-mini.png" alt="" /></div>
          <div class="ty-2">
            <h1>coffe late</h1>
            <div class="jml">
              <div><button>-</button></div>
              <div><span>1</span></div>
              <div><button>+</button></div>
            </div>
          </div>
          <div class="ty-3">Rp. 15.000</div>
        </div>
        <div class="tayo-nav">
          <div class="ty-1"><img src="image/b-mini.png" alt="" /></div>
          <div class="ty-2">
            <h1>coffe late</h1>
            <div class="jml">
              <div><button>-</button></div>
              <div><span>1</span></div>
              <div><button>+</button></div>
            </div>
          </div>
          <div class="ty-3">Rp. 60.000</div>
        </div>
      </div>
      <div class="aside-nav2">
        <div class="total">
          <div class="ttl-hrg">
            <h1>total</h1>
            <span>*belum termasuk pajak</span>
          </div>
          <div class="ttl-jml"><h1>Rp. 105.000</h1></div>
        </div>
        <div class="checkout">
         <b-button v-b-modal.modal-1>Launch demo modal</b-button>
          <button @click="data" class="ctn-search" id="cnc">Cancel</button>
        </div>
      </div>
    </aside>
</template>

<script>
export default {
  props: ['isActive', 'data'],
  methods: {
    getSlider: function () {
    }
  }

}
</script>
