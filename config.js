/*
 * @file 配置文件
 * @author haoran
 */

module.exports = {
  // Deploy
  public_path_dev: '/',
  public_path_prod: '//www.curlyhair.cn/',
  port: 8686,
  plugin_url: '',
  ga_id: '',
  fb_id: '',
  analyse_bundle: true,

  // server
  template_root_dir_dev: `${__dirname}/dist/html/`,
  template_root_dir_prod: `${__dirname}/dist/html/`,
  static_dir_dev: `${__dirname}/dist/static/`,
  static_dir_prod: `${__dirname}/dist/static/`,

  // HTML meta data
  page: {
    title: 'm-report',
    desc: '',
    image: '',
    url: '',
    thumb: '',
  },

  // request url
  io: {
  },
};
