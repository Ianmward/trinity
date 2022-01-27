import { trinityRoll } from "/systems/trinity/module/trinity-roll.js";

export class TrinityCombat extends Combat
{

  async rollInitiative(ids, options)
  {
    let changes = [];
    for(const id of ids)
    {
      const c = this.combatants.get(id);
      let targetActor = c.actor;
      let event = {};
      let force = true;
      var ini = "";

      // Actors w/o an initiative roll
      if (c.actor.data.data.initiativeRollID === "") {
        ini = 0;
        let chatData = {
          content: `${c.actor.data.name} has no initiative roll selected.`
        };
        ChatMessage.create(chatData)
      } else {

      // Actors w/ an initiative roll selected
        let pickedElements = c.actor.data.data.savedRolls[c.actor.data.data.initiativeRollID].elements;
        let breaker = c.actor.data.data.savedRolls[c.actor.data.data.initiativeRollID].dice;

        let combatRoll = await trinityRoll(targetActor, pickedElements, event, force);
        ini = combatRoll._total + (breaker * 0.01);
      }

      changes.push({
        _id: c.id,
        initiative: ini
      });
    }

    this.updateEmbeddedDocuments('Combatant', changes);
  }

}
