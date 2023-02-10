<template>
    <div class="no-appointment-card">
      <img id="no-reservation-icon" src="../assets/images/no_appointment.svg"/>
      <p>아직 예약된 데이트가 없습니다</p>
    </div>
</template>
<script>
export default {
  name: 'no_appointment_card',
  props: {
    
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.no-appointment-card {
    box-sizing: border-box;
    width: 236px;
    height: 170px;
    background: #AB9A8A;
    border: 0.845px solid #F2F2F2;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: auto;
    top: 100px;
    #no-reservation-icon {
        width: 25px;
        height: 25px;
    }
}
</style>
