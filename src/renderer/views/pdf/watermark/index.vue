<template>
  <div class="pdf-water-wrap">
    pdf 水印
    <el-button @click="openFile">选择pdf</el-button>
    <el-button @click="openFile">水印</el-button>
    <el-row>
      <el-col :span="11">
        <iframe :src="sourcePdf" frameborder="0" class="pdf-iframe"></iframe>
      </el-col>
      <el-col :span="11" :offset="1">
        <iframe :src="sourcePdf" frameborder="0" class="pdf-iframe"></iframe>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const { ipcRenderer } = require("electron");
// const { dialog } = require("electron").remote;
export default {
  data() {
    return {
      sourcePdf: '',
      markedPdf: ''
    }
  },
  setup() {
  },
  methods: {
    async openFile() {
      ipcRenderer.invoke("pdf-watermark").then((res) => {
        if (res) {
          ElMessage({
            type: "success",
            message: res,
          });
        }
      });
    }
  },
}
</script>
<style lang="scss" scoped>
.pdf-water-wrap{
  .pdf-iframe{
    width: 100%;
    height: 80vh;
  }
}

</style>