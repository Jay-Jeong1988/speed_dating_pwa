<template>
  <div class="SubmitResultPage">
    <Header :headerTitle="this.headerTitle"></Header>
    <p>호감을 표시해 주세요</p>
    <div class="demo-banner">
      <div><img class="interest-icon" src="../assets/images/heart.svg" />
        <p>또 만나고 싶어요! (최대 3 명 선택 가능)</p>
      </div>
      <div><img class="interest-icon" src="../assets/images/smile.svg" />
        <p>친구할래요! (최대 2 명 선택 가능)</p>
      </div>
      <div><img class="interest-icon" src="../assets/images/thumb_down.svg" />
        <p>오늘이 마지막 만남이에요.</p>
      </div>
    </div>
    <div class="example-icons-container">
      <div class="name-buffer"></div>
      <img class="interest-icon" src="../assets/images/heart.svg" />
      <img class="interest-icon" src="../assets/images/smile.svg" />
      <img class="interest-icon" src="../assets/images/thumb_down.svg" />
    </div>
    <div class="participants-list-container" v-if="participants.length">
      <ul class="participants-list">
        <li class="participants-list-item" v-for="participant in participants" :key="participant.id">
          <p>{{ participant.name }}</p>
          <!-- <label class="container">
            <input type="radio" :id="participant.id" :name="participant.name" value="HTML" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            <input type="radio" :id="participant.id" :name="participant.name" value="HTML" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            <input type="radio" :id="participant.id" :name="participant.name" value="HTML" />
            <span class="checkmark"></span>
          </label> -->
          <div class="radio">
            <input type="radio" :id="participant.id" :name="participant.name" value="HTML" />
            <label :for="participant.id" class="radio-label"></label>
          </div>
          <div class="radio">
            <input type="radio" :id="participant.id" :name="participant.name" value="HTML" />
            <label :for="participant.id" class="radio-label"></label>
          </div>
          <div class="radio">
            <input type="radio" :id="participant.id" :name="participant.name" value="HTML" />
            <label :for="participant.id" class="radio-label"></label>
          </div>
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
    users.forEach((item) => {
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

/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid #fff;
}

/* On mouse-over, add a grey background color */
.container:hover input~.checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked~.checkmark {
  background-color: #fff;
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--form-control-color);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked~.checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
.radio {
  margin: 0.5rem;
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    + .radio-label {
      &:before {
        content: '';
        background: #fff;
        border-radius: 100%;
        border: 1px solid darken(#fff, 25%);
        display: inline-block;
        width: 1.4em;
        height: 1.4em;
        position: relative;
        top: -0.2em;
        margin-right: 1em; 
        vertical-align: top;
        cursor: pointer;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color: #853B3B;
          box-shadow: inset 0 0 0 4px #fff;
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: #853B3B;
        }
      }
    }
    &:disabled {
      + .radio-label {
        &:before {
          box-shadow: inset 0 0 0 4px #fff;
          border-color: darken($color1, 25%);
          background: darken($color1, 25%);
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
