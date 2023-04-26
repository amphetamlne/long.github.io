jsproxy_config({
  ver: '144',
  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 67
  },
  // 节点配置
  node_map: {
    'mysite': {
      label: '当前站点',
      lines: {
        [location.host]: 1,
      }
    },
    'qq': {
      label: 'QQ',
      lines: {
        'js.412503533.workers.dev': 1,
        'res.412503533.workers.dev': 1,
      }
    },
    '163': {
      label: '163',
      lines: {
        'js.412503533-163.workers.dev': 1,
        'res.412503533-163.workers.dev': 1,
      }
    },
    'gmail': {
      label: '谷歌',
      lines: {
        'js.412503533-gmail.workers.dev': 1,
        'res.412503533-gmail.workers.dev': 1,
      }
    },    
    'sina': {
      label: '新浪',
      lines: {
        'js.412503533-sina.workers.dev': 1,
        'res.412503533-sina.workers.dev': 1,
      }
    },
    'all': {
      label: '综合',
      lines: {
        'js.412503533.workers.dev': 1,
        'js.412503533-163.workers.dev': 1,
        'js.412503533-gmail.workers.dev': 1,
        'js.412503533-sina.workers.dev': 1,
        'res.412503533.workers.dev': 1,
        'res.412503533-163.workers.dev': 1,
        'res.412503533-gmail.workers.dev': 1,
        'res.412503533-sina.workers.dev': 1,        
      }
    }
  },
  /**
   * 默认节点
   */
  node_default: 'qq', 

  /**
   * 加速节点
   */
  node_acc: 'mysite',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  //assets_cdn: 'https://cdn.jsdelivr.net/gh/amphetamlne/long.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',
  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  //direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  //inject_html: '<!-- custom html -->',
  
  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
  }
})
