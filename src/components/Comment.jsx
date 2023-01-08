import { forwardRef } from "react";
import { useUserData } from "../helpers/useUserData";
import { relativeDate } from "../helpers/relativeDate";

const Comment = forwardRef(({ comment, createdBy, createdDate }, ref) => {
  const userQuery = useUserData(createdBy);

  if (userQuery.isLoading) {
    return (
      <div className="comment">
        <div>
          <div className="comment-header">Loading...</div>
        </div>
      </div>
    );
  }

  if (ref) {
    return (
      <div ref={ref} className="comment">
        <img src={userQuery.data.profilePictureUrl} alt="Commenter Avatar" />
        <div>
          <div className="comment-header">
            <span>{userQuery.data.name}</span> commented{" "}
            <span>{relativeDate(createdDate)}</span>
          </div>
          <div className="comment-body">{comment}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="comment">
      <img src={userQuery.data.profilePictureUrl} alt="Commenter Avatar" />
      <div>
        <div className="comment-header">
          <span>{userQuery.data.name}</span> commented{" "}
          <span>{relativeDate(createdDate)}</span>
        </div>
        <div className="comment-body">{comment}</div>
      </div>
    </div>
  );
});

export default Comment;
