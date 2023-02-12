<template>
  <div class="SubmitResultPage">
    <Header></Header>
    <p>호감을 표시해 주세요</p>
    <div class="demo-banner">
      <div><img class="interest-icon" src="../assets/images/heart.svg"/><p>또 만나고 싶어요! (최대 3 명 선택 가능)</p></div>
      <div><img class="interest-icon" src="../assets/images/smile.svg"/><p>친구할래요! (최대 2 명 선택 가능)</p></div>
      <div><img class="interest-icon" src="../assets/images/thumb_down.svg"/><p>오늘이 마지막 만남이에요.</p></div>
    </div>
    <div class="menuContainer" v-if="participants.length">
      <ul class="menus" v-for="participant in participants" :key="participant.id">
          <li >
            <div class="reservation">
              <div class="reservation-card">
                <p>일정 {{ event.date }} {{  event.time }}</p>
                <p>장소 {{ event.branch }}</p>
              </div>
            </div>
          </li>
      </ul>
    </div>
    <NoReservationCard v-else></NoReservationCard>
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
      participants: [],
    }
  },
  methods: {
  },
  components: { Header },
  mounted() {
    users.forEach((item)=>{
      if(item.isOver){ 
        this.finished_events.push(item)
      }else {
        this.booked_events.push(item)
      }
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
  align-items: center;
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
</style>
