import { upCase } from "../formatters/upCase"

export const Attribute = ({ attribute }) => {
  const [name, value] = attribute

  return (
    <li>
      <span><strong>{upCase(name)}:</strong> {value}</span>
    </li>
  )
}
