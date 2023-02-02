import { upCase } from "../formatters/upCase"

export const CharacterClass = ({ characterClass }) => {
  return (
    <div className="character__class">
      <span><strong>Class Name:</strong> {upCase(characterClass)}</span>
      <img src={require(`../../public/assets/${characterClass}.jpeg`)} alt="Character class" />
    </div>
  )
}
