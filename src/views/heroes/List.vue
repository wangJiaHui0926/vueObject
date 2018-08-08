<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in list" :key="item.id">
                  <td>{{ index + 1}}</td>
                  <td>{{item.name}}</td>
                  <td>{{item.gender}}</td>
                  <td>
                    <router-link :to="'/heroes/' + item.id">edit</router-link>
                    &nbsp;&nbsp;
                    <a @click.prevent="handleDelete(item.id)" href="javascript:void(0)">delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      this.loadData();
    },
    methods: {
      loadData () {
        axios
        .get('http://localhost:3001/heroes')
        .then((response) => {
          if(response.status === 200) {
            this.list = response.data;
          }
        })
        .catch((err) => {
          console.log(err);
        })
      },
      handleDelete(id) {
        if(!confirm('是否删除该数据')){
          return;
        }
        axios
          .delete(`http://localhost:3001/heroes/${id}`)
          .then((response) => {
            if(response.status === 200) {
              this.loadData();
            }else {
              alert('删除失败');
            }
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  };
</script>

<style>

</style>
