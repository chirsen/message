// 消息盒子的各种映射配置
// 正在使用的消息 type

export const typeList = [2, 3, 4, 5, 6, 7, 9, 10]

export const messageTypeMap = {
  0: '通用消息',
  1: '退款售后类消息',
  2: '客服指标提醒',
  3: '发货提醒消息',
  4: '账户资金消息',
  5: '店铺动态通知',
  6: '商品动态通知',
  7: '快递物流消息',
  9: '售后提醒消息',
  10: '店铺违规通知'
}

// 点击跳转到相应的处理页面，后面跟 orderId 之类的确定当前消息来源的参数
export const handleMsgMap = {
  8: '#/chats/data/list',
  3: '#/orders/import/index',
  9: '#/recharge/deposit',
  6: '#/orders/search/index?type=0',
  10: '#/orders/search/index?type=12',
  14: '#/orders/search/index?type=0',
  15: '#/activity/message/index?type=3',
  16: '#/activity/message/index?type=3',
  11: '#/goods/goods_list/index?tab=3',
  12: '#/goods/goods_list/index?tab=2',
  13: '#/goods/goods_onsales_list/index',
  18: '#/orders/search/index?type=18',
  19: '#/activity/resource/attended_list?type=new',
  20: '#/activity/resource/attended_list?type=new',
  25: '#/mall/decorate_mall/homepage_decorate',
  23: '#/orders/search/index',
  26: '#/questionnaire?commit_from=2',
  28: '#/recharge/activity_bond',
  29: '#/goods/goods_onsales_list/recycle',
  35: '#/chats/data/complain',
  31: '#/mall/violation_info/violation',
  32: '#/orders/search/index?type=2',
  33: '#/orders/search/index?type=2',
  34: '#/mall/violation_info/violation?type=2',
  36: '#/mall/violation_info/violation?type=2',
  37: '#/mall/violation_info/violation?type=2',
  38: '#/mall/violation_info/violation?type=2',
  39: '#/mall/violation_info/violation?type=2',
  40: '#/mall/violation_info/violation?type=2',

}


export const subMessageTypeMap = {
  0: '退款申请',
  1: '售后超时提醒',
  2: '退货提示',
  3: '卖家申请平台介入',
  4: '买家修改退款协议',
  8: '账户资金'
}

export const msgContentMap = {
  'msgContent':'消息内容',
  'goods_name':'商品名称',
  'start_time':'开始时间',
  'end_time':'结束时间',
  'order_num': '订单数量',
  'send_time': '提醒时间',
  'msgRemark': '消息备注',
  'msgSummary': '内容摘要',
  'msgNotReached': '未达标客服',
  'deniedReason': '驳回原因',
  'auditDeniedReason': '抽审下架原因',
  'goodsName': '商品名称',
  'editSuccess': '发布成功通知',
  'editDenied': '编辑驳回通知',
  'msgCommon': '内容',
  'goodsId': '商品ID',
  'express': '快递公司',
  'expressOrder': '快递单号',
  'lottery_order_num': '待发货订单数量',
  'activityType': '资源位类型',
  'operator': '操作人',
  'operateTime':'操作时间',
  'deleteNum': '被删除商品个数',
  'complaintNum': '投诉次数'
}
