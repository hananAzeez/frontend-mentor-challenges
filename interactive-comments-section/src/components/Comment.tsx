import { useUser } from "@clerk/nextjs";

interface CommentProps {
  createdAt: Date;
  id: number;
  likes: number;
  text: string;
  updatedAt: Date;
  userId: string;
  setShowDeleteModel: React.Dispatch<React.SetStateAction<boolean>>;
  setDeleteCommentId: React.Dispatch<React.SetStateAction<number>>;
}

const Comment = ({
  createdAt,
  id,
  likes,
  text,
  // updatedAt,
  userId,
  setShowDeleteModel,
  setDeleteCommentId,
}: CommentProps) => {
  const { isLoaded, user } = useUser();
  const isYou = user?.id === userId;

  const commentDate = createdAt;
  let formattedDate;
  if (commentDate) {
    const dateObj = new Date(commentDate);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();

    formattedDate = `${month} ${day} ${year}`;
  }

  return (
    <div className="relative flex flex-col-reverse items-start gap-5 rounded-lg bg-white p-5 md:flex-row">
      <div className="like flex items-center justify-center gap-3 rounded-md bg-veryLightGray px-3 py-1 font-medium text-moderateBlue md:flex-col md:gap-1 md:px-2 md:py-1">
        <p className="cursor-pointer text-lg">+</p>
        <p>{likes}</p>
        <p className="cursor-pointer text-lg">-</p>
      </div>
      <div className="content flex flex-col gap-5">
        <div className="user flex items-center gap-3 ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={isLoaded ? user?.profileImageUrl : "Loading..."}
            className="w-6 rounded-full"
            alt="profile"
          />
          <p className=" font-medium text-darkBlue">
            {isLoaded && user?.username}
          </p>
          {isYou && (
            <p className="rounded-sm bg-moderateBlue px-2 py-[3px] text-xs text-white">
              you
            </p>
          )}
          <p className="text-sm text-grayishBlue">
            {isLoaded && formattedDate}
          </p>
          {/* <p>{isLoaded && user?.createdAt.}</p> */}
        </div>
        <div className="comment">
          <p className="text-base text-grayishBlue">{text}</p>
        </div>
      </div>
      {isYou ? (
        <div className="reply absolute bottom-5 right-5 flex items-center gap-5 font-medium md:bottom-auto md:top-5">
          <div
            className="delete flex cursor-pointer items-center gap-2"
            onClick={() => (
              setShowDeleteModel((prevState) => !prevState),
              setDeleteCommentId(id)
            )}
          >
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                fill="#ED6368"
              />
            </svg>
            <p className="text-softRed">Delete</p>
          </div>
          <div className="edit flex cursor-pointer items-center gap-2">
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                fill="#5357B6"
              />
            </svg>
            <p className="text-moderateBlue">Edit</p>
          </div>
        </div>
      ) : (
        <div className="reply absolute bottom-5 right-5 flex items-center gap-5 font-medium hover:cursor-pointer md:bottom-auto md:top-5">
          <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
              fill="#5357B6"
            />
          </svg>
          <p className="text-moderateBlue">Reply</p>
        </div>
      )}
    </div>
  );
};

export default Comment;
