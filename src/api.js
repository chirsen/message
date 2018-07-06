/**
 * 整个盒子的请求控制，包括请求的缓存，请求的多次请求
 */
// 获取某个类别下的 数据内容
const listUrl = 'nomallid/earth/api/msgBox/list';
// 定时获取最新的重要消息的 url
const lastUrl = '';
// 获取未读消息总数
const unReadUrl = 'earth/api/msgBox/total/mall'
// 获取弹出消息的总数
const popUpUrl = 'earth/api/msgBox/total/order';
// 标记已经读过（点击下一条的时候调用）
const markReadUrl = 'earth/api/msgBox/markRead';
