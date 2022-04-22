<template>
  <el-col :span="16">
    <div class="num">
      <el-card class="card" shadow="hover" v-for="(item, index) in countData" :key="index"
        :body-style="{ display: 'flex', padding: 0 }">
        <i :class="`el-icon-${item.icon}`" :style="{ background: item.color }" class="icon"></i>
        <div class="detail">
          <p>￥{{ item.value }}</p>
          <p class="name">{{ item.name }}</p>
        </div>
      </el-card>
    </div>
    <el-card shadow="hover" style="height: 240px">
      <div ref="echarts" style="height: 240px"></div>
    </el-card>
    <div class="graph">
      <el-card shadow="hover" style="height: 230px; width: 415px">
        <div style="height: 220px" ref="userEcharts"></div>
      </el-card>
      <el-card shadow="hover" style="height: 230px; width: 415px">
        <div style="height: 230px" ref="videoEcharts"></div>
      </el-card>
    </div>
  </el-col>
</template>

<script>
import { getEcharts } from 'network/aside.js'
export default {
  name: 'HomeRight',
  props: {
    countData: [],
  },
  mounted() {

    getEcharts().then(res => {
      console.log(res[0]);
      // console.log(res.data);
      const data = res[0].orderData.data
      const date = res[0].orderData.date

      // 折线图
      const keyArray = Object.keys(data[0])
      let series = []
      keyArray.forEach(key => {
        series.push({
          name: key,
          data: data.map(item => item[key]),
          type: 'line'
        })
      })
      // 基于准备好的dom，初始化echarts实例
      let dom = this.$refs.echarts
      var myChart = this.$echarts.init(dom);
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: date
        },
        yAxis: {},
        legend: {
          data: keyArray
        },
        series
      });

      // 用户活跃图

      const userChart = this.$echarts.init(this.$refs.userEcharts)
      userChart.setOption({
        tooltip: {},
        xAxis: {
          type: 'category',
          data: res[0].userData.map(item => item.date)
        },
        yAxis: {},
        legend: {
          data: ['新增用户', '活跃用户']
        },
        color: ['#2ec7c9', '#b6a2de'],
        series: [
          {
            name: '新增用户',
            data: res[0].userData.map(item => item.new),
            type: 'bar'
          },
          {
            name: '活跃用户',
            data: res[0].userData.map(item => item.active),
            type: 'bar'
          }
        ]
      });

      // 饼图
      const videoChart = this.$echarts.init(this.$refs.videoEcharts)
      videoChart.setOption({
        tooltip: {
          trigger: 'item'
        },
        color: [
          '#0f78f4',
          '#dd536b',
          '#9462e5',
          '#a6a6a6',
          '#e1bb22',
          '#39c362',
        ],
        series: [
          {
            data: res[0].videoData,
            type: 'pie'
          }
        ]
      })
    })
  }
}
</script>

<style scoped>
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  line-height: 1px;
  width: 260px;
  flex-direction: column;
  margin-right: 16px;
  margin-bottom: 10px;
  height: 50px;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #fff;
}

.name {
  font-size: 10px;
  margin-left: 5px;
  color: #a9a9a9;
}

.graph {
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
}
</style>
