<template>
  <div class="SubmitResultPage">
    <Header :headerTitle="this.headerTitle"></Header>
    <p>호감을 표시해 주세요</p>
    <div class="demo-banner">
      <div><img class="interest-icon" src="../assets/images/heart.svg"/><p>또 만나고 싶어요! (최대 3 명 선택 가능)</p></div>
      <div><img class="interest-icon" src="../assets/images/smile.svg"/><p>친구할래요! (최대 2 명 선택 가능)</p></div>
      <div><img class="interest-icon" src="../assets/images/thumb_down.svg"/><p>오늘이 마지막 만남이에요.</p></div>
    </div>
    <div class="example-icons-container">
      <div class="name-buffer"></div>
      <img class="interest-icon" src="../assets/images/heart.svg"/>
      <img class="interest-icon" src="../assets/images/smile.svg"/>
      <img class="interest-icon" src="../assets/images/thumb_down.svg"/>
    </div>
    <div class="participants-list-container" v-if="participants.length">
      <ul class="participants-list" >
          <li class="participants-list-item" v-for="participant in participants" :key="participant.id">
            <p>{{ participant.name }}</p>
            <input type="radio" id="{{ participant.id }}" name="{{ participant.name }}" value="HTML"/>
            <input type="radio" id="{{ participant.id }}" name="{{ participant.name }}" value="HTML"/>
            <input type="radio" id="{{ participant.id }}" name="{{ participant.name }}" value="HTML"/>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import users from '../assets/test_data/users.json'
export default {
  name: 'Submit_result_page',
  props: {
    
  },
  data() {
    return {
      headerTitle: "결과 제출",
      participants: [],
    }
  },
  methods: {
  },
  components: { Header },
  mounted() {
    users.forEach((item)=>{
      this.participants.push(item)
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.demo-banner {
  box-sizing: border-box;
  width: 320px;
  height: 80px;
  background: #853B3B;
  border: 1px solid #F2F2F2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .interest-icon {
      margin-right: 10px;
    }
    p {
      margin: 0;
      font-size: 14px;
    }
  }
}
.example-icons-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  .name-buffer {
    width: 40px;
    height: 20px;
  }
  .interest-icon {
    margin-right: 10px;
  }
}
.participants-list {
  padding: 0;
  margin: 0;
  .participants-list-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
