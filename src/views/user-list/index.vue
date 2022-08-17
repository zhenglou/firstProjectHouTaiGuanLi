<template>
   <div class="tableList">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
      <el-table-column
        fixed
        prop="name"
        label="名字"
        width="150">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        >
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
        >
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
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
  name: "UserList",
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
          sex:'女',
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          email: '1299302045@qq.com',
        },
        {
          date: "2016-05-02",
          name: "玩小虎",
          sex:'女',
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          email: '1299302045@qq.com',
        },
        {
          date: "2016-05-02",
          name: "丸小虎",
          sex:'女',
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          email: '1299302045@qq.com',
        },
        {
          date: "2016-05-02",
          name: "网小虎",
          sex:'女',
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          email: '1299302045@qq.com',
        },
        {
          date: "2016-05-02",
          name: "旺小虎",
          sex:'女',
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          email: '1299302045@qq.com',
        },
        {
          date: "2016-05-02",
          name: "汪小虎",
          sex:'女',
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          email: '1299302045@qq.com',
        },
        {
          date: "2016-05-02",
          name: "完小虎",
          sex:'女',
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          email: '1299302045@qq.com',
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
