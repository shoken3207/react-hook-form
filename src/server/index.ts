import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { createCallerFactory, procedure, router } from "./trpc";

export const appRouter = router({
  hello: procedure.query(() => {
    return { msg: "Hello World" };
  }),
  getUsers: procedure.query(async () => {
    const users = await prisma.user.findMany();
    return users;
  }),
  getUserById: procedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const users = await prisma.user.findUnique({ where: { id: input.id } });
      return users;
    }),
  createUser: procedure
    .input(z.object({ email: z.string(), name: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.user.create({ data: input });
      return "ユーザーを登録しました";
    }),
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
