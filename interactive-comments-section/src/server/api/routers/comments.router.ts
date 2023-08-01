import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const commentsRouter = createTRPCRouter({
  createComment: publicProcedure
    .input(
      z.object({
        text: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const comment = await prisma.comment.create({
        data: {
          text: input.text,
          userId: input.userId,
          likes: [],
        },
      });
      return comment;
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.comment.findMany();
  }),

  delete: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      await prisma.comment.delete({
        where: { id: input.id },
      });
    }),

  update: publicProcedure
    .input(z.object({ id: z.number(), text: z.string() }))
    .mutation(async ({ input }) => {
      const { id, text } = input;
      const updatedComment = await prisma.comment.update({
        where: { id },
        data: { text },
      });
      return updatedComment;
    }),
});
