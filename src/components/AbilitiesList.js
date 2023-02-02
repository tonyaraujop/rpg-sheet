import { Ability } from "./Ability"

export const AbilitiesList = ({ abilities }) => {
  return (
    <ul>
      {abilities.map(({ name, description, manaCost }) => (
        <Ability key={name} name={name} description={description} manaCost={manaCost} />
      ))}
    </ul>
  )
}
