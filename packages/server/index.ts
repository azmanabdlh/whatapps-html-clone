import { Elysia } from 'elysia';

const PORT = process.env.PORT || 8181;

new Elysia()
  .get("/", () => "Hello Server")
  .listen(PORT);

console.log(`Server running to localhost:${PORT}`)