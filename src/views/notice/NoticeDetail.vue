<template>
  <section class="detail">
    <el-form ref="form" label-width="120px">
      <el-form-item label="제목">
        <el-input v-model="form.subj" readonly></el-input>
      </el-form-item>
      <el-form-item label="구분" label-width="">
        <el-input v-model="form.noticeTp" readonly></el-input>
      </el-form-item>
      <el-form-item label="작성일">
        <el-input v-model="form.regDt" readonly></el-input>
      </el-form-item>
      <el-form-item label="내용">
        <el-input v-html="form.conts" readonly></el-input>
      </el-form-item>
      <el-form-item label="이미지">
        <img :src="imgFile"/>
      </el-form-item>
    </el-form>
    <div class="bottomBtns">
      <el-button type="primary" @click="$router.push('/notice/list')">목록</el-button>
      <el-button type="primary" @click="onUpdate">수정</el-button>
      <el-button type="primary" @click="onDelete">삭제</el-button>
    </div>
  </section>
</template>


<script>
  import { VueEditor } from 'vue2-editor'
  // import axios from 'axios'
  import camelCase from 'camelcase-keys'
  import { noticeDetail, noticeDelete } from '@/api/app.js'
  export default {
    components: {
      VueEditor
    },
    methods: {
      onUpdate() {
        this.$router.push({
          path: '/notice/register',
          query: {no: this.no}
        })
      },
      onDelete() {
        noticeDelete({
          no: this.no,
          form: this.form
        })
        .then(res => {
          console.log('res = ', res);
          if (res.data.ok) this.$router.push('/notice/list')
        })
        .catch(err => {
          console.log(err);
          alert('에러가 발생하였습니다.');
        })
        .finally(() => {

        })
      }
    },
    data() {
      return {
        no: this.$route.query.no,
        form: {},
        imgFile: ''
      }
    },
    created() {
      console.log('no =', this.$route.query.no)
      noticeDetail(this.no)
      // axios.get(`http://localhost:3000/notice/detail/${this.no}`)
      // axios.get(`http://localhost:3000/notice/detail?no=${no}`) // queryString
        .then(res => {
          console.log('res = ', res.data.body);
          
          const data = camelCase(res.data.body)

          console.log('data = ', data);

          this.form = data

          if(data.phyImgName) {
            this.imgFile = `http://15.164.27.43:3000/images/${data.phyImgName}`
          }
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
        })
    }
  }
</script>
<style scoped>
  .el-select .el-input {
    width: 110px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
