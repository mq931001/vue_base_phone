/*
config.js
说明：
  请确保解压后的文件目录为dist
  ssh: 连接服务器用户信息
  targetDir: 需要压缩的文件目录（启用本地压缩后生效）
  targetFile: 指定上传文件名称（config.js同级目录）
  openCompress: 关闭后，将跳过本地文件压缩，直接上传同级目录下指定文件
  openBackUp: 开启后，若远端存在相同目录，则会修改原始目录名称，不会直接覆盖
  deployDir: 指定远端部署地址
  releaseDir: 指定远端部署地址下的发布目录名称
  现已支持添加多个配置信息，自动化部署时支持选择配置信息运行
  现已支修改服务器连接端口，支持ssh私钥及解密密码连接（ps：不使用此方法时，请注释privateKey）
  现已更新模块引用逻辑，远端备份时间格式改为 `yyyy-MM-dd_HH:mm:ss`
  */

 const config = [
  {
    name: 'xxx',
    ssh: {
      host: '192.168.170.171',
      port: 22,
      username: 'root',
      password: 'xxx',
      // privateKey: 'E:/id_rsa', // ssh私钥(不使用此方法时请勿填写， 注释即可)
      // passphrase: '123456' // ssh私钥对应解密密码(不存在设为''即可)
    },
    targetDir: '../dist', // 目标压缩目录(可使用相对地址)
    targetFile: 'maqing.zip', // 目标文件
    openCompress: true, // 是否开启本地压缩
    openBackUp: true, // 是否开启远端备份
    deployDir: '/usr/share/nginx/html/test/', // 远端目录
    releaseDir: 'maqing', // 发布目录
    script:"npm run build",
  },
  {
    name: 'xx',
    ssh: {
      host: '192.168.0.110',
      port: 22,
      username: 'root',
      password: 'root',
      privateKey: 'E:/id_rsa', // ssh私钥(不使用此方法时请勿填写， 注释即可)
      passphrase: '123456' // ssh私钥对应解密密码(不存在设为''即可)
    },
    targetDir: 'E:/private/my-vue-cli/dist', // 目标压缩目录(可使用相对地址)
    targetFile: 'dist.zip', // 目标文件
    openCompress: true, // 是否开启本地压缩
    openBackUp: true, // 是否开启远端备份
    deployDir: '/home/node_test' + '/', // 远端目录
    releaseDir: 'web2' // 发布目录
  }
]

module.exports = config