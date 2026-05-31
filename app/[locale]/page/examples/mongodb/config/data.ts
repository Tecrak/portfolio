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

const account = [
  {
    id: 1,
    name: "Stas",
    email: "staspon@gmail.com",
    imgCards: [
      {
        imgCardId: "1",
        imgCardSrc: "https:sssss",
        imgCardText: "Hi, First one",
        likes: [
          {
            likeEmail: "tester@gmail.com",
            likeName: "Tester",
            likeCount: "1",
          },
        ],
        comments: [
          {
            commID: "1",
            commName: "Tester",
            commEmail: "tester@gmail.com",
            commText: "Nice first!",
          },
        ],
      },
    ],
  },
];
