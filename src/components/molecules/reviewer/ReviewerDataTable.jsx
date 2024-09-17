import Table from "@/components/atoms/table/Table";
import TableHeader from "@/components/atoms/table/TableHeader";
import TableBody from "@/components/atoms/table/TableBody";
import TableRow from "@/components/atoms/table/TableRow";
import TableCol from "@/components/atoms/table/TableCol";
import {useEffect, useRef, useState} from "react";
import TablePagination from "@/components/atoms/table/TablePagination";

export default function ReviewerDataTable({ items }) {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Ref to capture the element for dropdown
  const dropdownRefs = useRef([]);

  const handleToggle = (id) => {
    setDropdownOpen(dropdownOpen === id ? null : id);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownOpen !== null && // dropdown is open
        dropdownRefs.current[dropdownOpen] && // ref exists
        !dropdownRefs.current[dropdownOpen].contains(event.target) // clicked outside the dropdown
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      <Table>
        <TableHeader
          items={[
            {
              classes: 'px-6 py-3 text-left text-gray-600',
              name: 'No'
            },
            {
              classes: 'px-6 py-3 text-left text-gray-600',
              name: 'No. Box'
            },
            {
              classes: 'px-6 py-3 text-left text-gray-600',
              name: 'Document Type'
            },
            {
              classes: 'px-6 py-3 text-left text-gray-600',
              name: 'Total WP'
            },
            {
              classes: 'px-6 py-3 text-left text-gray-600',
              name: 'Total Document'
            },
            {
              classes: 'px-6 py-3',
              name: 'Actions'
            }
          ]}
        />
        <TableBody>
          {items.length > 0 && items.map((item) => (
            <TableRow
              key={item.id}
              className="border-b"
            >
              <TableCol className="px-6 py-4 text-gray-700">
                {item.id}
              </TableCol>
              <TableCol className="px-6 py-4 text-gray-700">
                {item.number}
              </TableCol>
              <TableCol className="px-6 py-4 text-gray-700">
                {item.documentType}
              </TableCol>
              <TableCol className="px-6 py-4 text-gray-700">
                {item.totalWP}
              </TableCol>
              <TableCol className="px-6 py-4 text-gray-700">
                {item.totalDocument}
              </TableCol>
              <TableCol className="px-6 py-4 text-right relative">
                <button
                  onClick={() => handleToggle(item.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ⋮
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen === item.id && (
                  <div
                    ref={(el) => (dropdownRefs.current[item.id] = el)} // Set ref for each dropdown
                    className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10 text-start"
                  >
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                    </ul>
                  </div>
                )}
              </TableCol>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination />
    </>
  )
}
