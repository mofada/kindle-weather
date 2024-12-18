#!/bin/bash
# * * * * * /var/local/weather/update.sh
# 每分钟运行一次，更新屏幕，防止误触

cd /var/local/weather || exit 1

# 获取电池电量
batteryLevel=$(gasgauge-info -s)

# 使用黑色图像填充屏幕
eips -g fill.png

# 清屏
eips -c

eips -c

# 如果电池电量小于10，显示低电量图像
if [ "$batteryLevel" -lt 10 ]; then
  eips -g low-battery.png  # 显示低电量图像
  exit 0
fi

# 显示截图图像
eips -g screenshot.png
