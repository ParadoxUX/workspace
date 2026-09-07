import { createServer, IncomingMessage, ServerResponse } from "node:http";

const port = 8080;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-type", "application/json; charset=utf-8");

  res.end(
    JSON.stringify({
      message: "Тест АПИ! Привет!",
      timestamp: new Date().toISOString(),
    })
  );
});

server.listen(port, () => {
  console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
