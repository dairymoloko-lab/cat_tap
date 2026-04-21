import shopItems from "../shopItems";

export default function Inventory({ onUseItem, inventory, setInventory }) {

  const handleUse = (itemId) => {
    const item = inventory.find(i => i.id === itemId);
    if (!item || item.count <= 0) return;


    onUseItem(itemId);

    const updated = inventory
      .map(i =>
        i.id === itemId ? { ...i, count: i.count - 1 } : i
      )
      .filter(i => i.count > 0);

    setInventory(updated);
  };

  return (
    <div className="inventory">
      <h3>🎒 Инвентарь</h3>

      <div className="inventory-list">
        {inventory.map(invItem => {
          const itemData = shopItems.find(i => i.id === invItem.id);

          return (
            <div
              key={invItem.id}
              className="inventory-item"
              onClick={() => handleUse(invItem.id)}
            >
              <div className="badge">{invItem.count}</div>
              {itemData.emoji}
            </div>
          );
        })}
      </div>
    </div>
  );
}