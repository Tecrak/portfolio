import ExamplesLayout from "@/app/[locale]/page/examples/layout"; 

export default function PostgresqlLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ExamplesLayout>{children}</ExamplesLayout>;
}
