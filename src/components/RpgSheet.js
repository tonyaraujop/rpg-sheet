import { player } from "../entries/players"
import { AbilitiesList } from "./AbilitiesList"
import { AttributesList } from "./AttributesList"
import { Character } from "./Character"
import { CharacterClass } from "./CharacterClass"
import { HpMpStats } from "./HpMpStats"
import { LvlExpStats } from "./LvlExpStats"

export const RpgSheet = () => {
  const { name, surname, hp, mp, level, experience, attributes, characterClass, abilities } = player

  return (
    <div className="container">
      <header>
        <div className="header--primary">
          <Character name={name} surname={surname} />
        </div>
        <div className="header--secondary">
          <HpMpStats hp={hp} mp={mp} />
          <LvlExpStats lvl={level} xp={experience} />
        </div>
      </header>
      <section>
        <div className="section--primary">
          <AttributesList attributes={attributes} />
          <CharacterClass characterClass={characterClass} />
        </div>
        <div>
          <AbilitiesList abilities={abilities}/>
        </div>
      </section>
    </div>
  )
}
