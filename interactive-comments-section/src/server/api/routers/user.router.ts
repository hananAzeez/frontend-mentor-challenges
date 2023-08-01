import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
        userName: z.string(),
        profileImage: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await prisma.user.upsert({
        where: { id: input.id },
        create: {
          id: input.id,
          userName: input.userName,
          profileImage: input.profileImage,
        },
        update: {},
      });
      return user;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: { id: input.id },
      });
      return user;
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const deletedUser = await prisma.user.delete({
        where: { id: input.id },
      });
      return deletedUser;
    }),
});
