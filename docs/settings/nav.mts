/**
 * 顶部导航条相关
 */
export const nav = [
  { text: "首页", link: "/" },

  {
    text: "前端",
    items: [
      {
        text: "三剑客",
        items: [
          { text: "CSS", link: "/frontend/css/css-basic/基础使用.md" },
          { text: "Javascript", link: "/frontend/javascript/Javascript.md" }
        ]
      },
      {
        text: "Node",
        items: [{ text: "Node.js", link: "/frontend/node/基础使用.md" }]
      },
      {
        text: "可视化",
        items: [
          { text: "ECharts", link: "/frontend/visual/Echarts/ECharts.md" }
        ]
      },
      {
        text: "Git",
        items: [{ text: "Git分支", link: "/frontend/git/分支分类.md" }]
      }
    ]
  },

  {
    text: "Vue",
    items: [
      {
        text: "TypeScript",
        items: [
          {
            text: "TypeScript",
            link: "/frontend/typescript/基础类型.md"
          }
        ]
      },
      {
        text: "Vue",
        items: [
          { text: "Vue3", link: "/frontend/vue/vue-basic/ref函数.md" },
          { text: "Pinia", link: "/frontend/store/pinia/基础使用.md" },
          { text: "Vuex", link: "/frontend/store/vuex/基础使用.md" }
        ]
      },
      {
        text: "构建工具",
        items: [
          { text: "Vite", link: "/frontend/vite/index.md" },
          { text: "Rollup", link: "/frontend/vite/rollup.md" }
        ]
      }
      // {
      //   text: "小程序",
      //   items: [{ text: "微信小程序", link: "/frontend/wxprogram/基础使用.md" }]
      // }
    ]
  },

  // {
  //   text: "React",
  //   items: [{ text: "React", link: "/frontend/react/react-basic/基础使用.md" }]
  // },

  {
    text: "数据库",
    items: [
      { text: "MySQL", link: "/database/mysql/基本SQL语句.md" },
      { text: "PostgreSQL", link: "/database/postgres/基本使用.md" },
      { text: "SQLite", link: "/database/sqlite/SQLite.md" }
    ]
  },

  {
    text: "Linux",
    link: "/operations/linux/软件安装.md"
  },

  // {
  //   text: "C#",
  //   items: [
  //     { text: "C#基础", link: "/backend/net/CSharp/CSharpBasic/方法与数组.md" },
  //     { text: "WebAPI", link: "/backend/net/webapi/雪花ID.md" },
  //     { text: "微服务模块", link: "/backend/net/microservice/微服务概念.md" }
  //   ]
  // },

  {
    text: "Java",
    items: [
      {
        text: "核心内容",
        items: [
          { text: "Java基础", link: "/backend/java/java-basic/数据类型.md" },
          { text: "JDBC", link: "/backend/java/jdbc/基础使用.md" },
          {
            text: "JavaWeb",
            link: "/backend/java/javaweb/序列化和反序列化.md"
          },
          { text: "JVM", link: "/backend/java/jvm/基础使用.md" }
        ]
      },
      {
        text: "基建",
        items: [{ text: "Maven", link: "/backend/java/maven/项目结构.md" }]
      }
    ]
  },

  {
    text: "GIS",
    items: [
      {
        text: "二维地图",
        items: [
          { text: "Mapbox", link: "/gis/mapbox/快速入门.md" },
          // { text: "Leaflet", link: "/gis/leaflet/leaflet.md" },
          { text: "OpenLayers", link: "/gis/openlayers/快速入门.md" }
          // { text: "ArcGIS API", link: "" },
        ]
      },
      {
        text: "三维地图",
        items: [
          { text: "WebGL", link: "/gis/webgl/基础入门.md" },
          { text: "Cesium", link: "/gis/cesium/cesium-primary/快速入门.md" },
          { text: "Three.js", link: "/gis/three/基础入门.md" }
        ]
      },
      {
        text: "地图部署",
        items: [{ text: "GeoServer", link: "/gis/geoserver/环境安装.md" }]
      }
    ]
  }
]
