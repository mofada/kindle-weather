#!/bin/bash
# */3 * * * * /var/local/weather/start.sh
# 每三分钟运行一次，接口请求次数有限

# 设置工作目录为 /var/local/weather
cd /var/local/weather || exit 1

# 替换你的key和location和city
API_KEY="API_KEY"
LOCATION="LOCATION"
CITY="CITY"

# 下载截图图像
if ! curl "https://kindle.mofada.cn/screenshot?key=${API_KEY}&location=${LOCATION}&city=${CITY}" -o screenshot.png; then
  echo "下载截图失败"
  exit 1
fi
