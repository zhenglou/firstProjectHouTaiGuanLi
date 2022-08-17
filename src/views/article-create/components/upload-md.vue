<template>
   <div>
     <el-upload
     name="md"
      class="upload-demo"
      drag
      :auto-upload="false"
      action=""
      :limit="1"
      :on-change="judgeMd"
      >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
import { isMd } from '@/until/judgeImgType'
export default {
  name:'UploadMd',
  methods:{
    judgeMd(file,fileList){
      console.log(fileList);
       if(file.status !== 'ready') return;
      if(isMd(file.name)){
       this.$emit("handleArticle",file.raw);
      }else{
        this.$message.error("只能传md的格式文件");
        fileList.pop()

      }
    }
  }
}
</script>
<style lang="less" scoped>
 /deep/ .el-upload-list{
     width: 300px;
  }
</style>
