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
          <p>{{ scope.row.pName }}</p>
      </template>
    </el-table-column>

    <el-table-column
      label="分类"
      width="80">
      <template scope="scope">
        <p>{{ scope.row.class }}</p>
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
        <p>{{ scope.row.cont }}</p>
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
  export default {
    data() {
      return {
        tableData: [{
          pid:2,
          pName: '商品1',
          price: '2000',
          class:"水果",
          cont:22,
          danwei:"个",
          desc:"222",
          imgUrl: '222'
        },{
          pid:2,
          pName: '商品2',
          price: '2000',
          class:"水果",
          cont:22,
          danwei:"个",
          desc:"222",
          imgUrl: '222'
        },{
          pid:2,
          pName: '商品3',
          price: '2000',
          class:"水果",
          cont:22,
          danwei:"个",
          desc:"222",
          imgUrl: '222'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
