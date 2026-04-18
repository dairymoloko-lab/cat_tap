export default function StatsModal({ stats, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Статистика 📊</h2>
        <p>Имя: {stats.name}</p>
        <p>Всего кликов: {stats.totalClicks}</p>
        <p>Котокойны: {stats.score}</p>
        <p>Множитель: {stats.multiplier}</p>
<p>Автоклик: {stats.autoClick}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}