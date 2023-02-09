<template>
  <div class="LoginPage">
    <div class="title-container">
      <img id="logo" src="../assets/images/logo.png" />
      <h1 class="title">러브투고 로그인</h1>
    </div>
    <div class="login-form">
      <form @submit.prevent="fnLogin">
          <p>
            <input class="w3-input" name="uid" placeholder="이메일 주소" v-model="user_id"><br>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="비밀번호" v-model="user_pw" type="password">
          </p>
          <p>
            <button type="submit" class="w3-button w3-green w3-round">로그인-></button>
          </p>
        </form>
        <div class="findId">
          <a href="#">비밀번호 찾기</a>
          <h3>|</h3>
          <a href="#">회원가입</a>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String
  },
  data() {
    return {
      user_id: '',
      user_pw: ''
    }
  },
  methods: {
    fnLogin() {
      if (this.user_id === '') {
        alert('ID를 입력하세요.')
        return
      }

      if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }

      alert('로그인 되었습니다.')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .LoginPage {
    background-color: #E0CBB8;
    #logo {
      width: 90px;
    }
  }
</style>
