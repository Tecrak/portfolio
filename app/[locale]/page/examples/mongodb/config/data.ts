export type Comment = {
  aId: string;
  aImg: string;
  commentText: string;
  commentLikes: number;
};

export type Person = {
  _id: string;
  name: string;
  imgSrc: string;
  authComment?: string;
  likeCount: number;
  date: string;
  comments: Comment[];
};
