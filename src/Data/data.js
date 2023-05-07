import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilMoneyWithdrawal
  } from "@iconscout/react-unicons";

  //Sidebar
  export const sidebarData = [
    {
      id: "001",
      icon: UilEstate,
      name: "Dashboard",
    },
    {
      id: "002",
      icon: UilClipboardAlt,
      name: "Orders",
    },
    {
      id: "003",
      icon: UilUsersAlt,
      name: "Customers",
    },
    {
      id: "004",
      icon: UilPackage,
      name: "Products",
    },
    {
      id: "005",
      icon: UilChart,
      name: "Analytics",
    },
  ]

  //Cards
  export const cardsData = [
    {
      id: "001",
      title: "Sales",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: "25,970",
      png: UilUsdSquare,
      series:[ {
        name: "Sales",
        data: [31,40,28,51, 42, 109, 100]
      },]
    },
    {
      id: "002",
      title: "Revenue",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
      series:[ {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40]
      },]
    },
    {
      id: "003",
      title: "Expenses",
      color: {
        backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",      },
      barValue: 60,
      value: "4,960",
      png: UilClipboardAlt,
      series: [{
        name: "Expenses",
        data:  [10, 25, 15, 30, 12, 15, 20],
      },]
    },
  ] 

  //Chart
  export const chartData = {
    options:{
      chart:{
        type:"area",
        height:"auto"
      },
      dropShadow:{
        enabled:false,
        enabledOnSeries:undefined,
        top:0,
        left:0,
        blur:3,
        color: "#000",
        opacity: 0.35,
      },
      fill:{
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    }
  }

  //Table
export const tableData = [
  {
    name:"Lasania Chiken Fri",
    id:18978424,
    date:"2 March 2022",
    status:"Approved"
  },
  {
    name:"Big Baza Bang ",
    id: 18908424,
    date: "2 March 2022",
    status:"Pending",
  },
  {
    name:"Mouth Freshner",
    id:18908428,
    date:"2 March 2022",
    status:"Approved",
  },
  {
    name:"Cupcake",
    id:18908421,
    date:"2 March 2022",
    status:"Delivered",
  },
]