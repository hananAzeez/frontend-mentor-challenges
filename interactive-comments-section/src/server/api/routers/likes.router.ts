import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const likesRouter = createTRPCRouter({
  handleUpvote: publicProcedure
    .input(z.object({ commentId: z.number(), userId: z.string() }))
    .mutation(async ({ input }) => {
      const { commentId, userId } = input;
      const comment = await prisma.comment.findUnique({
        where: { id: commentId },
      });
      const likes = comment?.likes ?? [];
      if (Array.isArray(likes) && likes.includes(userId)) {
        return { comment };
      } else {
        const updatedComment = await prisma.comment.update({
          where: { id: commentId },
          data: { likes: [likes, userId] },
        });
        return { comment: updatedComment };
      }
    }),
});
