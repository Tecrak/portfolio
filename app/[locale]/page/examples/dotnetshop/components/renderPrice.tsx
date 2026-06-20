export default function RenderPrice({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) {
  const renderPrice = () => {
    // 1. Якщо початкова ціна вже 0, то гра безкоштовна
    if (price === 0) return "Free";

    // 2. Якщо є знижка (discount > 0)
    if (discount > 0) {
      const finalPrice = price * (1 - discount);

      // Якщо після знижки ціна стала 0 або пішла в мінус — буде Free
      if (finalPrice <= 0) return "Free";

      // Інакше повертаємо обчислену ціну з двома знаками після коми
      return `${finalPrice.toFixed(2)}$`;
    }
    // 3. Якщо знижки немає (discount === 0), просто повертаємо базову ціну
    return `${price.toFixed(2)}$`;
  };

  return renderPrice();
}
