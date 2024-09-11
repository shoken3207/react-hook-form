import { z } from "zod";
import { prisma } from "../../lib/prisma";
import { createCallerFactory, procedure, router } from "./trpc";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { CreateUserSchema } from "@/app/schema/user/schema";

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
  createUser: procedure.input(CreateUserSchema).mutation(async ({ input }) => {
    try {
      await prisma.user.create({ data: input });
      return { status: 200, message: "ユーザーを登録しました" };
    } catch (error) {
      console.log(1);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(2, error.code, error.meta?.target);
        if (
          error.code === "P2002" &&
          Array.isArray(error.meta?.target) &&
          error.meta?.target.includes("email")
        ) {
          console.log(3);
          throw new TRPCError({
            code: "CONFLICT",
            message: "このメールアドレスは既に登録されています",
          });
        }
      }

      console.error(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "ユーザーの登録に失敗しました",
      });
    } finally {
      await prisma.$disconnect();
    }
  }),
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
