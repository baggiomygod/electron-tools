<template>
  <div class="menus-container">
  <!-- <el-switch v-model="isCollapse" /> -->
    <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-files"></i>
        <span>PDF</span>
      </template>
      <router-link to="/pdf/watermark">
          <el-menu-item index="1-1">
            PDF水印
          </el-menu-item>
        </router-link>
        <router-link to="/pdf/split">
          <el-menu-item index="1-2">
            PDF拆分
          </el-menu-item>
        </router-link>
    </el-sub-menu>
     <el-sub-menu index="2">
      <template #title>
        <i class="el-icon-files"></i>
        <span>DEMO</span>
      </template>
      <router-link to="/demo/test">
          <el-menu-item index="2-1">
            test
          </el-menu-item>
        </router-link>
     
    </el-sub-menu>
  </el-menu>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
  export default defineComponent({
    setup() {
      const isCollapse = ref(false)
      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
      }
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
      }
      return {
        isCollapse,
        handleOpen,
        handleClose,
      }
    },
})
</script>
<style lang="scss">
.menus-container{
  height: 100vh;
  .el-menu-vertical{
    height: 100%;
    width: 200px;
  }
}
  
</style>