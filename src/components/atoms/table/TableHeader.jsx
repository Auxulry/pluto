export default function TableHeader({ items }) {
  return (
    <thead className="bg-gray-100 rounded-lg">
      <tr>
        {items.length > 0 && items.map((item, key) => (
          <th key={key} className={item.classes}>{item.name}</th>
        ))}
      </tr>
    </thead>
  )
}
