<template>
  <div class="hero">
    <div id="content">
      <h>Line Charts for Your Expenditure Recordings</h>
      <canvas ref="chart"></canvas>
    </div>
    <a href="#/expenditures" class="btn btn-secondary btn" role="button">Return to Manage</a>
  </div>
</template>

<script>
  import Chart from 'chart.js';
  import axios from 'axios';

  export default {
    name: 'chart',
    components: {Chart},
    data () {
      return {
        chart: null,
        props: ['_id'],
        date: [],
        amount: []
      }
    },
    created () {
      this.fillData()
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        axios
          .get("https://cypher2.herokuapp.com/1804094746@qq.com/expenditures", {
          })
          .then(response => {
              this.date = response.data.map(a => a.date);
              this.amount = response.data.map(a => a.amount);
              this.message = response.data.map(a => a.message);

            let chart = this.$refs.chart;
            let ctx = chart.getContext("2d");


            let myChart = new Chart(ctx, {
              type: 'line',
              data: {
                labels: this.message,
                datasets: [{
                  label: 'Amount',
                  data: this.amount,
                  backgroundColor: [
                    'rgba(255, 240, 245, 0.4)'
                  ],
                  borderColor: [
                    'rgba(255,240,245,1)'
                  ]
                }]
              },
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }
            });
          })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #E6E6FA;
    margin-top: 0px;
  }
  h {
    font-size: 30pt;
    color: 	#FFF0F5;
    margin-top: 30px;
  }
  #content {
    margin: auto;
    margin-top: 25px;
    width: 1024px;
    padding: 20px;
  }

</style>


