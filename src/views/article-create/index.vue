<template>
  <div class="article-create">
      <!-- 标题
        文章简述
        文章标签
        文章封面
        文章内容
       -->
    <el-form 
      ref="articalForm"
      :model="articalFromData" 
      :rules="articleRules" 
      class="articalForm"
    >
      <el-form-item  prop="name">
        <el-input v-model="articalFromData.name" class="inputWidth" placeholder="请输入文章名称"></el-input>
      </el-form-item> 
      <el-form-item  prop="describe">
        <el-input v-model="articalFromData.describe" class="inputWidth" placeholder="请输入文章简述"></el-input>
      </el-form-item>
      <el-form-item  prop="tag" class="inputWidth" >
        <el-select 
          v-model="articalFromData.tag"
          placeholder="请输入文章的标签"
          class="inputWidth" 
        >
          <el-option 
            v-for="(item) in articleTagsList" 
            :value="item"
            :key="item"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
         <UploadCover  @handleCover="getCoverFile"></UploadCover>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="uploadArticleRadio">
          <el-radio label="UploadMd">上传md文件</el-radio>
          <el-radio label="MarkDown">markdowm编辑</el-radio>
          <el-radio label="RichText">富文本编辑</el-radio>
        </el-radio-group>
          <!-- 动态组件 -->
        <component :is="uploadArticleRadio" @handleArticle="getMdFile"> </component>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button type="primary" @click="resetFromData">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import UploadCover from "./components/upload-cover.vue";
import MarkDown from "./components/mark-down.vue";
import RichText from "./components/rich-text.vue";
import UploadMd from "./components/upload-md.vue";
export default {
  name: "ArticleCreate",
  data() {
    return {
      uploadArticleRadio:'UploadMd',
      articleTagsList: ["Vue", "Node", "webpack", "Git"],
      articalFromData: {
        name: "",
        describe: "",
        tag: "",
      },
      articleRules: {
        name: [{ require: "true", message: "该项为必填项" }],
        describe: [{ require: "true", message: "该项为必填项" }],
        tag: [{ require: "true", message: "该项为必填项" }]
      }
    };
  },
  methods: {
    onSubmit(){},
    resetFromData(){},
    getCoverFile(file){

    },
    getMdFile(file){

    }
  },
  components:{MarkDown, 
              RichText,
              UploadCover,
              UploadMd
             }
};
</script>
<style lang="less" scoped>
@inputWidth: 400px;
@background-color: #fff;
@boder-radius: 6px;
@clolr: #696b6e;
.article-create {
  padding: 20px;
  background-color: @background-color;
  border-radius: @boder-radius;
  .articalForm {
    color: @clolr;
    .inputWidth {
      width: @inputWidth;
    }

    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #101214;
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
}
</style>
