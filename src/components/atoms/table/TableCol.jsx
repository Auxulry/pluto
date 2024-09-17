export default function TableCol({ children, ...rest }) {
  return (
    <td {...rest}>
      {children}
    </td>
  )
}
