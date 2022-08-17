<template>
   <div>
       <editor
        :initialValue="editorText"
        :options="editorOptions"
        height="500px"
        initialEditType="wysiwyg"
        previewStyle="vertical"
        @change="onEditorChange('markdown')"
      />
  </div>
</template>
<script>
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/vue-editor';
export default {
  name:'MarkDown',
  components:{Editor},
      data() {
      return {
        editorText: '我无敌无敌啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',
        editorOptions: {
          hideModeSwitch: fa入lse,
          placeholder: '请输内容...' 
        }
      };
    },
    methods:{
      onEditorChange(name){
      let getArticleContent = this.$refs[name].invoke("getMarkdown");
      //  this.$emit("handleArticle",getArticleContent);
      }
    }
  }
</script>
<style scoped>

</style>
