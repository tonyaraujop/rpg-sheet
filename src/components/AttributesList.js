import { Attribute } from "./Attribute"

export const AttributesList = ({ attributes }) => {
  return (
    <ul>
      {Object.entries(attributes).map(([name, value]) => (
        <Attribute key={name} value={value} name={name} />
      ))}
    </ul>
  )
}
