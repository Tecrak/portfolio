export type NavItem = {
  label: string;
  path: string;
};

export interface ExampleLink extends NavItem {
  tag?: string;
  led?: "green" | "yellow" | "red" | "gray";
  badgeType?: string;
  badgeStatus?: "stable" | "beta" | "maintenance";
  infoTitle?: string;
  infoDesc?: string;
  infoChips?: string[];
}

export const EXAMPLELINKS: ExampleLink[] = [
  {
    label: "PostgreSQL",
    path: "/page/examples/postgresql",
    tag: "sql · relational",
    led: "green",
    badgeType: "SQL",
    badgeStatus: "stable",
    infoTitle: "PostgreSQL — реляційна СУБД",
    infoDesc:
      "Потужна об'єктно-реляційна база даних з підтримкою складних запитів, транзакцій та розширень. Ідеальна для структурованих даних і ACID-сумісних операцій.",
    infoChips: ["SELECT", "JOIN", "INDEX", "TRANSACTION"],
  },
  {
    label: "MongoDB",
    path: "/page/examples/mongodb",
    tag: "nosql · document",
    led: "yellow",
    badgeType: "NoSQL",
    badgeStatus: "stable",
    infoTitle: "MongoDB — документна БД",
    infoDesc:
      "Гнучка документна база даних на основі BSON. Ідеальна для неструктурованих або мінливих схем та швидкої ітерації.",
    infoChips: ["find()", "aggregate()", "index", "replica"],
  },
  {
    label: "MySQL",
    path: "/page/examples/mysql",
    tag: "sql · relational",
    led: "yellow",
    badgeType: "SQL",
    badgeStatus: "beta",
    infoTitle: "MySQL — популярна СУБД",
    infoDesc:
      "Широко використовувана реляційна база даних, особливо у веб-розробці. Відмінно підходить для LAMP-стеку та додатків з читанням-переважанням.",
    infoChips: ["SELECT", "INSERT", "STORED PROC", "REPLICATION"],
  },
];