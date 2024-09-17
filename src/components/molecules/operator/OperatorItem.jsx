import RowItemScan from "@/components/atoms/row/RowItemScan";

export default function OperatorItem({ items }) {
  return (
    <div>
      {items.length > 0 && items.map((item) => (
        <RowItemScan key={item.id} name={item.name}  />
      ))}
    </div>
  )
}
