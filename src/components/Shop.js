import shopItems from "../shopItems";

export default function Shop({ score, setScore, inventory, setInventory }) {
//   const [, setInventory] = useLocalStorage("inventory", []);

  const buyItem = (item) => {
    if (score < item.price) return;

    setScore(score - item.price);

    const existing = inventory.find(i => i.id === item.id);

    if (existing) {
      setInventory(
        inventory.map(i =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i
        )
      );
    } else {
      setInventory([...inventory, { id: item.id, count: 1 }]);
    }
  };

  return (
    <div className="shop">
      <h2>🛒 Магазин</h2>

      <div className="shop-items">
        {shopItems.map(item => (
          <div key={item.id} className="shop-item">
            <div className="item-icon">
              {item.emoji}
            </div>

            <p>{item.name}</p>
            <p>+{item.income}/сек</p>

            <button onClick={() => buyItem(item)}>
              Купить ({item.price})
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}