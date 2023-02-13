<template>
    <div class="DashBoard">
      <Header></Header>
      <div class="menuContainer">
        <ul class="menus">
            <li ><router-link to="/booked_events"><img src="../assets/images/booked_events.svg"/>예약조회</router-link></li>
            <li ><router-link to="/submit_result"><img src="../assets/images/submit_result.svg"/>결과제출</router-link></li>
            <li ><router-link to="/payment_history"><img src="../assets/images/payment_history.svg"/>결제내역</router-link></li>
            <li ><router-link to="/logout"><img src="../assets/images/logout.svg"/>로그아웃</router-link></li>
            <li ><router-link to="/coupon"><img src="../assets/images/coupon.svg"/>쿠폰</router-link></li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../components/header.vue'
  export default {
    name: 'DashBoard',
    props: {
      headerTitle: "마이페이지",
      msg: String
    },
    data() {
      return {
      }
    },
    methods: {
    },
    components: { Header }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">

  </style>
  