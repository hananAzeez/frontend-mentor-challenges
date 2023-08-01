import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

const CommentInput = () => {
  const [text, setText] = useState("");
  const [userId, setUserId] = useState("");
  const { isLoaded, user } = useUser();
  const create = api.comments.createComment.useMutation();

  useEffect(() => {
    if (isLoaded) {
      const userId = user?.id;
      setUserId(userId || "");
    }
  }, [isLoaded, user?.id]);

  const createComment = (text: string, userId: string) => {
    create.mutate({ userId: userId, text: text });
    setText("");
  };

  return (
    <div className="relative flex items-start gap-4 rounded-lg bg-white p-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={user?.profileImageUrl}
        alt="profile"
        className="w-10 rounded-full"
      />
      <textarea
        name="comment input"
        id="comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`What's on your mind, ${user?.username || ""}`}
        rows={2}
        className="border-[hsl(211, 10%, 45%)] outline-[hsl(238, 40%, 52%)] placeholder:text-lightGrey w-full resize-none rounded-md border px-4 py-2 outline-[0.5px] placeholder:text-sm"
      ></textarea>
      <button
        className="rounded-md bg-moderateBlue px-5 py-2 text-sm tracking-wide text-white"
        onClick={() => createComment(text, userId)}
      >
        POST
      </button>
    </div>
  );
};

export default CommentInput;
