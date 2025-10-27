const WebSocket = require('ws');
const RedisService = require('@services/redisService');

// 在线用户人数
let onlineCount = 0;

// 写入Redis
const setOnlineCount = async () => {
  await RedisService.set('onlineCount', onlineCount, 60 * 60 * 24); // 1天有效期
};

// 配置WebSocket
function setupWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    onlineCount++;
    setOnlineCount();

    ws.on('message', (message) => {
      console.log('received: %s', message);
      ws.send(`Hello, you sent -> ${message}`);
    });

    ws.on('close', () => {
      onlineCount--;
      setOnlineCount();
    });
  });
}

setOnlineCount(); // 初始化

module.exports = setupWebSocketServer;
