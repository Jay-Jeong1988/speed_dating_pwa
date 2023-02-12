<template>
     <div class="page-header">
        <h1 class="title">{{ this.headerTitle }}</h1>
      </div>
      <div class="userInfo">
        <p id="emailAddress">jayjeong@kotra.or.kr</p>
        <img id="gender-icon" src="../assets/images/gender-male.png"/>
      </div>
</template>
<script>
    export default {
        name: 'Header_component',
        data() {
            return {}
        },
        props: []
            headerTitle
        }
    }
</script>
<style scoped lang="scss">
    .page-header {
        width: 80%;
        margin: auto;
        border-bottom: 1px solid #fff;
    }
    .userInfo {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #97897D;
        #gender-icon {
            width: 20px;
            height: 20px;
        }
    }   
</style>