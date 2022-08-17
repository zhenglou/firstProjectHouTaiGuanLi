<template>
  <el-upload
   name="cover"
    class="cover-uploader"
    action=""
    :show-file-list="true"
    :auto-upload="false"
    :limit="1"
    :on-change="handleChange"
    >
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
   
    <i v-else class="el-icon-plus cover-uploader-icon"></i>
  </el-upload>

</template>
<script>
import { imgType } from '@/until/judgeImgType';
export default {
  name: "UploadCover",
  data(){
    return{
      imageUrl:''
    }
  },
  methods:{
      handleChange(file, fileList){
        console.log(fileList);
        if(file.status !== 'ready') return;
        if(imgType(file.raw.type)){
          this.imageUrl = URL.createObjectURL(file.raw);
          this.$emit("handleCover",file.raw);
        }else{
          fileList.pop();
          this.$message.error("只能上传 gif / jpeg / webp / png 格式的图片")
        }
      }  
  }
};
</script>
<style lang="less" scoped>
.cover-uploader {
  /deep/.el-upload {
    position: relative;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
    }
 
  }
   /deep/ .el-upload-list{
        width: 300px;
    }
  .cover-uploader-icon {
    font-size: 30px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>
