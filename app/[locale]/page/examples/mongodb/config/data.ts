export type Comment = {
  aId: number;
  aImg: string;
  commentText: string;
  commentLikes: number;
};

export type Person = {
  _id: number;
  name: string;
  imgSrc: string;
  likeCount: number;
  date: string;
  comments: Comment[];
};

export const mData: Person[] = [
  {
    _id: 1,
    name: "Olena Kovalenko",
    imgSrc: "https://i.pravatar.cc/150?img=1",
    likeCount: 10,
    date: "12.03.2024",
    comments: [
      {
        aId: 1,
        aImg: "https://i.pravatar.cc/150?img=10",
        commentText: "Чудовий спеціаліст, рекомендую!",
        commentLikes: 4,
      },
      {
        aId: 2,
        aImg: "https://i.pravatar.cc/150?img=12",
        commentText: "Дуже відповідальна людина.",
        commentLikes: 2,
      },
      {
        aId: 3,
        aImg: "https://i.pravatar.cc/150?img=14",
        commentText: "Завжди допомагає команді.",
        commentLikes: 1,
      },
      {
        aId: 4,
        aImg: "https://i.pravatar.cc/150?img=16",
        commentText: "Приємно співпрацювати.",
        commentLikes: 0,
      },
    ],
  },
  {
    _id: 2,
    name: "Dmytro Shevchenko",
    imgSrc: "https://i.pravatar.cc/150?img=2",
    likeCount: 3,
    date: "05.11.2023",
    comments: [
      {
        aId: 5,
        aImg: "https://i.pravatar.cc/150?img=18",
        commentText: "Завжди вчасно здає задачі.",
        commentLikes: 3,
      },
    ],
  },
  {
    _id: 3,
    name: "Ivan Petrenko",
    imgSrc: "https://i.pravatar.cc/150?img=3",
    likeCount: 15,
    date: "20.07.2024",
    comments: [
      {
        aId: 6,
        aImg: "https://i.pravatar.cc/150?img=20",
        commentText: "Приємно працювати в одній команді.",
        commentLikes: 7,
      },
      {
        aId: 7,
        aImg: "https://i.pravatar.cc/150?img=22",
        commentText: "Знає своє діло.",
        commentLikes: 5,
      },
    ],
  },
  {
    _id: 4,
    name: "Sofia Bondarenko",
    imgSrc: "https://i.pravatar.cc/150?img=5",
    likeCount: 6,
    date: "01.01.2024",
    comments: [
      {
        aId: 8,
        aImg: "https://i.pravatar.cc/150?img=24",
        commentText: "Креативний підхід до вирішення проблем.",
        commentLikes: 2,
      },
    ],
  },
  {
    _id: 5,
    name: "Andriy Melnyk",
    imgSrc: "https://i.pravatar.cc/150?img=7",
    likeCount: 10,
    date: "15.09.2023",
    comments: [
      {
        aId: 9,
        aImg: "https://i.pravatar.cc/150?img=26",
        commentText: "Надійний розробник.",
        commentLikes: 6,
      },
      {
        aId: 10,
        aImg: "https://i.pravatar.cc/150?img=28",
        commentText: "Завжди готовий допомогти колегам.",
        commentLikes: 3,
      },
    ],
  },
  {
    _id: 6,
    name: "Natalia Sydorenko",
    imgSrc: "https://i.pravatar.cc/150?img=9",
    likeCount: 8,
    date: "28.02.2024",
    comments: [
      {
        aId: 11,
        aImg: "https://i.pravatar.cc/150?img=30",
        commentText: "Дуже уважна до деталей.",
        commentLikes: 4,
      },
      {
        aId: 12,
        aImg: "https://i.pravatar.cc/150?img=32",
        commentText: "Професіонал своєї справи.",
        commentLikes: 1,
      },
    ],
  },
  {
    _id: 7,
    name: "Vasyl Kravchenko",
    imgSrc: "https://i.pravatar.cc/150?img=11",
    likeCount: 5,
    date: "10.06.2023",
    comments: [
      {
        aId: 13,
        aImg: "https://i.pravatar.cc/150?img=34",
        commentText: "Швидко вирішує складні задачі.",
        commentLikes: 2,
      },
    ],
  },
  {
    _id: 8,
    name: "Iryna Lysenko",
    imgSrc: "https://i.pravatar.cc/150?img=13",
    likeCount: 12,
    date: "03.04.2024",
    comments: [
      {
        aId: 14,
        aImg: "https://i.pravatar.cc/150?img=36",
        commentText: "Відмінний командний гравець.",
        commentLikes: 5,
      },
      {
        aId: 15,
        aImg: "https://i.pravatar.cc/150?img=38",
        commentText: "Завжди з позитивним настроєм.",
        commentLikes: 3,
      },
    ],
  },
  {
    _id: 9,
    name: "Mykola Savchenko",
    imgSrc: "https://i.pravatar.cc/150?img=15",
    likeCount: 7,
    date: "22.12.2023",
    comments: [
      {
        aId: 16,
        aImg: "https://i.pravatar.cc/150?img=40",
        commentText: "Глибокі знання технологій.",
        commentLikes: 4,
      },
      {
        aId: 17,
        aImg: "https://i.pravatar.cc/150?img=42",
        commentText: "Завжди готовий до нових викликів.",
        commentLikes: 2,
      },
    ],
  },
];
