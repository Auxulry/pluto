import ReviewerFilter from "@/components/molecules/reviewer/ReviewerFilter";
import ReviewerDataTable from "@/components/molecules/reviewer/ReviewerDataTable";

export default function ReviewerDashboard() {
  return (
    <>
      <ReviewerFilter />
      <ReviewerDataTable
        items={[
          {
            id: 1,
            number: 134,
            documentType: '1770 S-I',
            totalWP: 250,
            totalDocument: 1200
          },
          {
            id: 2,
            number: 135,
            documentType: '1770 S-II',
            totalWP: 150,
            totalDocument: 1200
          }
        ]}
      />
    </>
  )
}
