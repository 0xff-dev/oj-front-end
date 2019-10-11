<template>
  <div class="contests">
    <TableHead title="Contests" :refresh="true" optionsName="Tags" cpType="search"></TableHead>
    <div v-for="item in datas" :key="item.title" class="contest-list">
      <div class="contest-part">
        <img :src="trophyPng" class="trophy-img" />
        <div class="contest-information">
          <div class="title">
            <span>{{item.title}}</span>
            <img :src="lockPng" class="lock-img" />
          </div>
          <div class="label">
            <img :src="timePng" class="time-img" />
            <span style="margin-right:10px">{{item.time}}</span>
            <img :src="durationPng" class="duration-img" />
            <span style="margin-right:10px">{{item.duration}}</span>
            <span class="rule">{{item.rule}}</span>
          </div>
        </div>
      </div>

      <div class="contest-status">
        <span class="status-color"></span>
        <span class="status">{{item.status}}</span>
      </div>
    </div>
    <Pagination :apiUrl="constUrl" :datas.sync="datas"></Pagination>
  </div>
</template>

<script>
import TableHead from "../tableHead.vue";
import Pagination from '../pagination.vue'
export default {
  name: "Contests",
  components: {
    TableHead, Pagination
  },
  data: function() {
    return {  
      datas: [],
      trophyPng: require(`../../assets/images/trophy.png`),
      timePng: require(`../../assets/images/time.png`),
      durationPng: require(`../../assets/images/duration.png`),
      lockPng: require(`../../assets/images/lock.png`),
      constUrl: "http://localhost:8888/contests"
    };
  }
};
</script>

<style scoped>
.contests {
  height: auto;
  background-color: white;
}
.contest-part {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
li {
  padding: 20px;
  border-bottom: 1px solid hsla(0, 0%, 73%, 0.5);
  list-style: none;
}
.contest-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 65px;
  margin-bottom: 20px;
  border-bottom: 1px solid hsla(0,0%,73%,.5);
}

.trophy-img {
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
}

.contest-information {
  height: 55px;
}

.title {
  margin-top: -5px;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.lock-img {
  height: 20px;
}

.label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  font-size: 14px;
}

.time-img {
  height: 20px;
}

.duration-img {
  height: 20px;
}

.contest-status {
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  align-items: center;
  width: 80px;
  justify-content: center;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}

.status-color {
  background: #ed3f14;
  width: 10px;
  height: 10px;
  -moz-border-radius: 50px;
  -webkit-border-radius: 50px;
  border-radius: 50%;
  margin-right: 5px;
}

.rule {
  border: 1px solid rgb(238, 238, 238);
  cursor: pointer;
  width: 50px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 10px;
  font-size: 13px;
}
.acm:hover {
  border: 1px solid rgb(133, 169, 219);
  color: rgb(133, 169, 219);
}
</style>
