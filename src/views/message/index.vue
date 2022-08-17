<template>
   <div class="tableList">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
      <el-table-column
        fixed
        prop="name"
        label="姓名"
        width="120px">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        >
      </el-table-column>
      <el-table-column
        prop="link"
        label="链接"
        >
      </el-table-column>
      <el-table-column
        prop="changeDate"
        label="修改日期"
      >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        >
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            移除
          </el-button>
          <el-button
            type="text"
            size="small">
            编辑
          </el-button>
        </template>
       
      </el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  name: "Message",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          link:'https://www.bilibili.com',
          changeDate:'2022-06-02'
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          link:'https://www.bilibili.com',
          changeDate:'2022-06-02'
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>

/deep/ .el-table td.el-table__cell, /deep/.el-table th.el-table__cell.is-leaf{
   text-align: center;
 }



</style>
