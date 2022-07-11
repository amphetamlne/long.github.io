jsproxy_config({
  ver: '118',
  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 65
  },
  // 节点配置
node_map: {	  
    'mysite': {
      label: '当前站点',
      lines: {
        'mute-recipe-c3f5.412503533.workers.dev': 1,
        'fancy-disk-7084.acao.workers.dev': 1,
        'bold-tree-891b.lcgmail.workers.dev':1,
        'old-tree-6fbc.lcsn.workers.dev':1,
        
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        'sparkling-boat-a72d.412503533.workers.dev': 1,
        'royal-snow-b156.acao.workers.dev': 1,
        'muddy-rice-43de.lcgmail.workers.dev':1,
        'falling-sun-29ba.lcsina.workers.dev':1,
      }
    }
  },
  /**
   * 默认节点
   */
  node_default: 'mysite', 

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  assets_cdn: 'https://cdn.jsdelivr.net/gh/amphetamlne/long.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',
  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<!-- custom html -->',
  
  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
  }
})
