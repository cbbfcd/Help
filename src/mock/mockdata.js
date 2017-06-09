/**
* @author: huangteng
* @desctiption: mock数据
* @notice: mock数据需要和后台提前约定好，包括接口地址
* @version: 1.0.0
* @time: 2017-6-8
*/

import Mock from 'mockjs'

// 仅在开发环境使用Mock数据
if(__DEV__){
	// 测试接口'/data'
	Mock.mock('/data',{
		data:{
			'name':'@name',
			'age|20-100':1
		},
		success:true,
		messages:'操作成功'
	})
}
export default Mock