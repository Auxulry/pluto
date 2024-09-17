export default function Table({
  children,
}) {
  return (
    <div className="container mx-auto">
      <div className="overflow-x-visible bg-white">
        <table className="min-w-full bg-white">
          {children}
        </table>
      </div>
    </div>
  );
}
