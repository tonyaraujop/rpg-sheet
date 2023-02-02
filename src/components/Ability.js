export const Ability = ({ name, description, manaCost }) => {
  return (
    <>
      <li>{name}</li>
      <ul><strong>Description:</strong> {description}</ul>
      <ul><strong>Mana Cost:</strong> {manaCost}</ul>
    </>
  )
}
