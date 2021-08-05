const { override, fixBabelImports, addWebpackPlugin, addLessLoader  } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = override(
    // 判断环境变量ANALYZER参数的值
	process.env.ANALYZER && addWebpackPlugin(new BundleAnalyzerPlugin()),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
    
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#218BE9' },
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
);