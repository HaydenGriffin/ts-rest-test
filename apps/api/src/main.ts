import { contract } from '@irmacos/domain';
import { PrismaClient } from '@prisma/client';
import { createExpressEndpoints, initServer } from '@ts-rest/express';
import express from 'express';
import 'zod';
import cors = require('cors');
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const s = initServer();

const router = s.router(contract, {
  getPost: async ({ params: { id } }) => {
    // const post = await prisma.post.findUnique({ where: { id } });

    return {
      status: 200,
      body: {
        id: '1',
        title: 'title',
        body: 'body',
      },
    };
  },
  createPost: async ({ body }) => {
    // const post = await prisma.post.create({
    //   data: body,
    // });

    return {
      status: 201,
      body: {
        id: '1',
        title: 'title',
        body: 'body',
      },
    };
  },
});

createExpressEndpoints(contract, router, app);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
