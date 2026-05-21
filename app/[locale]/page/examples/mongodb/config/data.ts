export type Comment = {
  aId: number;
  comment: string;
};

export type Person = {
  _id: number;
  name: string;
  imgSrc: string;
  likeCount: number;
  comments: Comment[];
};
export const mData: Person[] = [
  {
    _id: 1,
    name: "Olena Kovalenko",
    imgSrc: "https://i.pravatar.cc/150?img=1",
    likeCount: 10,
    comments: [
      { aId: 1, comment: "Чудовий спеціаліст, рекомендую!" },
      { aId: 2, comment: "Дуже відповідальна людина." },
      { aId: 3, comment: "Дуже відповідальна людина." },
      { aId: 4, comment: "Дуже відповідальна людина." },
    ],
  },
  {
    _id: 2,
    name: "Dmytro Shevchenko",
    imgSrc: "https://i.pravatar.cc/150?img=2",
    likeCount: 3,
    comments: [{ aId: 3, comment: "Завжди вчасно здає задачі." }],
  },
  {
    _id: 3,
    name: "Ivan Petrenko",
    imgSrc: "https://i.pravatar.cc/150?img=3",
    likeCount: 15,
    comments: [
      { aId: 4, comment: "Приємно працювати в одній команді." },
      { aId: 5, comment: "Знає своє діло." },
    ],
  },
  {
    _id: 4,
    name: "Sofia Bondarenko",
    imgSrc: "https://i.pravatar.cc/150?img=5",
    likeCount: 6,
    comments: [{ aId: 6, comment: "Креативний підхід до вирішення проблем." }],
  },
  {
    _id: 5,
    name: "Andriy Melnyk",
    imgSrc: "https://i.pravatar.cc/150?img=7",
    likeCount: 10,
    comments: [
      { aId: 7, comment: "Надійний розробник." },
      { aId: 8, comment: "Завжди готовий допомогти колегам." },
    ],
  },
  {
    _id: 6,
    name: "Andriy Melnyk",
    imgSrc: "https://i.pravatar.cc/150?img=7",
    likeCount: 10,
    comments: [
      { aId: 7, comment: "Надійний розробник." },
      { aId: 8, comment: "Завжди готовий допомогти колегам." },
    ],
  },
  {
    _id: 7,
    name: "Andriy Melnyk",
    imgSrc: "https://i.pravatar.cc/150?img=7",
    likeCount: 10,
    comments: [
      { aId: 7, comment: "Надійний розробник." },
      { aId: 8, comment: "Завжди готовий допомогти колегам." },
    ],
  },
  {
    _id: 8,
    name: "Andriy Melnyk",
    imgSrc: "https://i.pravatar.cc/150?img=7",
    likeCount: 10,
    comments: [
      { aId: 7, comment: "Надійний розробник." },
      { aId: 8, comment: "Завжди готовий допомогти колегам." },
    ],
  },
  {
    _id: 9,
    name: "Andriy Melnyk",
    imgSrc: "https://i.pravatar.cc/150?img=7",
    likeCount: 10,
    comments: [
      { aId: 7, comment: "Надійний розробник." },
      { aId: 8, comment: "Завжди готовий допомогти колегам." },
    ],
  },
];
