export type Comment = {
  commID: string;
  commName: string;
  commEmail: string;
  commImg: string;
  commText: string;
  commDate: string;
};

export type Post = {
  _id: string;
  ownerEmail: string;
  ownerName: string;
  ownerImage: string;
  imgSrc: string;
  authComment?: string;
  date: string;
  likes: string[]; // масив email
  comments: Comment[];
};
