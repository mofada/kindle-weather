#!/bin/bash
# 每五分钟运行一次，接口请求次数有限

# 替换你的key和location和city
API_KEY="API_KEY"
LOCATION="LOCATION"
CITY="CITY"

# 获取电池电量
batteryLevel=$(gasgauge-info -s)

# 如果电池电量小于10，显示低电量图像
if [ "$batteryLevel" -lt 10 ]; then
  eips -g fill.png # 使用黑色图像填充屏幕
  eips -c  # 清屏
  eips -g low-battery.png  # 显示低电量图像
  exit 0
fi

# 下载截图图像
if ! curl "https://kindle.mofada.cn/screenshot?key=${API_KEY}&location=${LOCATION}&city=${CITY}" -o
screenshot
.png; then
  echo "下载截图失败"
  exit 1
fi

# 使用黑色图像填充屏幕
eips -g fill.png

# 清屏
eips -c

eips -c

# 显示截图图像
eips -g screenshot.png
