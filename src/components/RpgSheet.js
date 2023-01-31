import { Attributes } from "./Attributes"
import { Character } from "./Character"
import { HpMpStats } from "./HpMpStats"
import { LvlExpStats } from "./LvlExpStats"

export const RpgSheet = () => {
  return (
    <div class="container">
      <header>
        <div class="header--primary">
          <Character name={"Tovrax"} surName={"Brave"} />
        </div>
        <div class="header--secondary">
          <HpMpStats hp={10} mp={8} />
          <LvlExpStats lvl={1} xp={8} />
        </div>
      </header>
      <section>
        <Attributes strength={10} wisdom={10} intelligency={10} agility={10} charisma={10} dexterity={10} />
      </section>
    </div>
  )
}
