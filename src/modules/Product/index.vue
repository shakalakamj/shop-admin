<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="ID"
      width="55">
      <template scope="scope">
        <span style="margin-left: 10px">{{ scope.row.pid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="名称"
      width="180">
      <template scope="scope">
          <p>{{ scope.row.pname }}</p>
      </template>
    </el-table-column>

    <el-table-column
      label="分类"
      width="80">
      <template scope="scope">
        <p>{{ scope.row.classid }}</p>
      </template>
    </el-table-column>
    <el-table-column
      label="单价"
      width="100">
      <template scope="scope">
        <p>{{ scope.row.price }}</p>
      </template>
    </el-table-column>

    <el-table-column
      label="数量"
      width="80">
      <template scope="scope">
        <p>{{ scope.row.totalnumber }}</p>
      </template>
    </el-table-column>


    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import {mapGetters,mapActions} from "vuex"
  export default {
    computed:{
      ...mapGetters({
        "tableData":"product/tabData"
      })
    },
    methods: {
      ...mapActions({
        "getList":"product/getList"
      }),
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    mounted(){
      this.getList({linenumber:5,pageNum:0})
    }
  }
</script>
