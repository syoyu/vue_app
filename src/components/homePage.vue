<head>
  <link rel="stylesheet" type="text/css" href="m_calendar.css">
</head>

<body>
<template>

    <v-ons-page>
    <div>
      <custom-toolbar :title="'Home'" :action="toggleMenu"></custom-toolbar>
    </div>
    <div>
      <p style="text-align: center">
        Welcome home.
      </p>
    </div>

      <div id="app">
    <div id="calendar-nav">
        <i class="glyphicon glyphicon-menu-left" v-on="click: moveLastMonth"></i>
        <span>{{calData.year}} - {{getMonthName(calData.month)}}</span>
        <i class="glyphicon glyphicon-menu-right"  v-on="click: moveNextMonth"></i>
    </div>
    <table id="calendar" class="table table-bordered">
        <thead>
            <tr>
                <th v-repeat="week: weeks">{{week}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-repeat="week: calendar">
                <td v-repeat="day: week">{{day.day}}</td>
            </tr>
        </tbody>
    </table>
</div>


    </v-ons-page>
</template>
</body>
//brach
<script>
  import customToolbar from './toolbar'
  export default {
    props: ['toggleMenu'],
    components: { customToolbar }
  }

  import calendar from './m_calendar'
</script>
