import { upCase } from "../formatters/upCase"

export const Attribute = ({ name, value }) => {
  return (
    <li>
      <span><strong>{upCase(name)}:</strong> {value}</span>
    </li>
  )
}
