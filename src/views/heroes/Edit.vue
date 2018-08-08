<template>
    <div>
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="英雄名称">
          </div>
          <div class="form-group">
            <label for="gender">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="英雄性别">
          </div>
          <button @click.prevent="handleAdd" type="submit" class="btn btn-success">提交</button>
        </form>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        props: ['id'],
        data () {
            return {
                formData: {
                    name: '',
                    gender: ''
                }
            }
        },
        created() {
            axios
                .get(`http://localhost:3001/heroes/${this.id}`)
                .then((response) => {
                    if(response.status === 200){
                        this.formData = response.data;
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        methods: {
            handleAdd () {
                axios
                    .put(`http://localhost:3001/heroes/${this.id}`, this.formData)
                    .then((response) => {
                        if(response.status === 200) {
                            this.$router.push('/heroes');
                        }else {
                            alert('编辑失败');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        }
    }
</script>

<style>

</style>
