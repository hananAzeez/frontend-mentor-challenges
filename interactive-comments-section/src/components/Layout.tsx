import { api } from "~/utils/api";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import { useState } from "react";

const Layout = () => {
  const [comments, setComments] = useState<Data[]>([]);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [deleteCommentId, setDeleteCommentId] = useState<number>(0);

  interface Data {
    createdAt: Date;
    id: number;
    likes: [];
    text: string;
    updatedAt: Date;
    userId: string;
  }

  const { data } = api.comments.getAll.useQuery();
  // useEffect(() => {
  //   if (data) {
  //     setComments(data);
  //   }
  // }, [data]);

  const deleteComment = api.comments.delete.useMutation();
  const deleteCommentFunc = (id: number) => {
    deleteComment.mutate({ id: id });
  };

  // const userComment = comments.map((comment) => {
  //   const { data } = api.user.getOne.useQuery({ id: comment.userId });
  //   if (data) {
  //     const { profileImage } = data;
  //     return { ...comment, profileImage };
  //   }
  // });
  // console.log("usercomment", userComment);

  return (
    <main className="mx-auto my-20 flex h-full max-w-2xl flex-col gap-5">
      <CommentInput />
      {comments &&
        comments.map(({ createdAt, id, likes, text, updatedAt, userId }) => (
          <Comment
            createdAt={createdAt}
            key={id}
            id={id}
            likes={likes.length}
            text={text}
            updatedAt={updatedAt}
            userId={userId}
            setShowDeleteModel={setShowDeleteModel}
            setDeleteCommentId={setDeleteCommentId}
          />
        ))}
      {showDeleteModel && (
        <DeleteModel
          setShowDeleteModel={setShowDeleteModel}
          deleteCommentId={deleteCommentId}
          deleteCommentFunc={deleteCommentFunc}
        />
      )}
    </main>
  );
};

export default Layout;

interface DeleteModelProps {
  setShowDeleteModel: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCommentId: number;
  deleteCommentFunc: (id: number) => void;
}

const DeleteModel = ({
  setShowDeleteModel,
  deleteCommentId,
  deleteCommentFunc,
}: DeleteModelProps) => {
  return (
    <>
      <div
        className="absolute left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-50"
        onClick={() => setShowDeleteModel(false)}
      ></div>
      <div className="model absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-7">
        <h2 className="text-xl font-semibold text-darkBlue">Delete comment</h2>
        <p className="pt-4">
          Are you sure you want to delete this <br />
          comment? This will remove the comment <br />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          and can't be undone.
        </p>
        <div className="actions flex w-full items-center gap-2 pt-3 text-white">
          <button
            className="flex-1 rounded-md bg-grayishBlue px-5 py-2 font-medium"
            onClick={() => setShowDeleteModel(false)}
          >
            NO, CANCEL
          </button>
          <button
            className="flex-1 rounded-md bg-softRed px-5 py-2 font-medium "
            onClick={() => (
              deleteCommentFunc(deleteCommentId), setShowDeleteModel(false)
            )}
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </>
  );
};
