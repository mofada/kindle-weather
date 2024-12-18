#!/bin/bash
# 每五分钟运行一次，接口请求次数有限

# 替换你的key和location和city
API_KEY="API_KEY"
LOCATION="LOCATION"
CITY="CITY"

# 下载截图图像
if ! curl "https://kindle.mofada.cn/screenshot?key=${API_KEY}&location=${LOCATION}&city=${CITY}" -o screenshot.png; then
  echo "下载截图失败"
  exit 1
fi
