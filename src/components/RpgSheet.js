import { player } from "../entries/players"
import { AttributesList } from "./AttributesList"
import { Character } from "./Character"
import { HpMpStats } from "./HpMpStats"
import { LvlExpStats } from "./LvlExpStats"

export const RpgSheet = () => {
  const { name, surname, hp, mp, level, experience, attributes } = player

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
        <AttributesList attributes={attributes} />
      </section>
    </div>
  )
}
