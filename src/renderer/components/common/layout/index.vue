<template>
  <div class="layout-container">
    <slider-menus class="slider-menus-wrap" />
    <div class="app-main">
        <div>
            <transition name="fade-transform" mode="out-in">
              <keep-alive>
                <router-view />
              </keep-alive>
            </transition>
          </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import SliderMenus from '@renderer/components/common/slider-menus/index.vue'
export default defineComponent({
  components: {
    SliderMenus,
  },
  
})
</script>
<style lang="scss">
  .layout-container{
    border-top: 1px solid #e2e2e2;
    display: flex;
    .slider-menus-wrap{
      flex: 0 0 auto;
    }
    .app-main{
      flex: 1 1 auto;
      padding: 20px;
    }
  }
</style>