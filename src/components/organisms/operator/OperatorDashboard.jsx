import OperatorHeader from "@/components/molecules/operator/OperatorHeader";
import OperatorItem from "@/components/molecules/operator/OperatorItem";

export default function OperatorDashboard() {
  return (
    <>
      <OperatorHeader />
      <OperatorItem
        items={[
          { id: 1, name: 'BOX 1764' },
          { id: 2, name: 'BOX 3364' }
        ]}
      />
    </>
  )
}
