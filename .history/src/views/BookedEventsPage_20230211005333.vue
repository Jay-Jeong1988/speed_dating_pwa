<template>
    <div class="BookedEventsPage">
      <Header></Header>
      <div class="menuContainer" v-if="booked_events.length">
        <div class="reservation-type">내 예약</div>
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
    name: 'Booked_events_page',
    props: {
      
    },
    data() {
      return {
        booked_events: events,
        finished_events: events
      }
    },
    methods: {
    },
    components: { Header, NoReservationCard },
    mounted() {
      events.forEach((item, index)=>{
        console.log(item.is + "," + index)
      })
    }
  }

  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .reservation-type {
      width: 300px;
      height: 34px;
      background: #AB9A8A;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .reservation-card {
      box-sizing: border-box;
      width: 300px;
      height: 100px;
      background: #E0CBB8;
      border: 1px solid #FFFFFF;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
    }
  </style>
  