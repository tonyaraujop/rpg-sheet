import { Attribute } from "./Attribute"

export const AttributesList = ({ attributes }) => {
  return (
    <ul>
      {Object.entries(attributes).map((attribute, index) => (
        <Attribute key={index} attribute={attribute} />
      ))}
    </ul>
  )
}
