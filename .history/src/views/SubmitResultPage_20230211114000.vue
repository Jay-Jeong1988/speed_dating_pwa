<template>
  <div class="SubmitResultPage">
    <Header></Header>
    <p>호감을 표시해 주세요</p>
    <div class="demo-banner">
      <img src="../assets/images/Vector.svg"/><p>또 만나고 싶어요! (최대 3 명 선택 가능)</p>
      <img src="../assets/images/Vector.svg"/><p>친구할래요! (최대 2 명 선택 가능)</p>
      <img src="../assets/images/Vector.svg"/><p>오늘이 마지막 만남이에요.</p>
    </div>
    <div class="menuContainer" v-if="participants.length">
      <ul class="menus" v-for="event in booked_events" :key="event.id">
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
import NoReservationCard from '../components/no_reservation_card.vue'
import Header from '../components/header.vue'
import events from '../assets/test_data/events.json'
export default {
  name: 'Submit',
  props: {
    
  },
  data() {
    return {
      booked_events: [],
      finished_events: []
    }
  },
  methods: {
  },
  components: { Header, NoReservationCard },
  mounted() {
    events.forEach((item)=>{
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
  
</style>
