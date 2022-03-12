export async function loadTrinityTemplates()
{
  // register templates parts
  const templatePaths = [
    "systems/trinity/templates/actor/partials/full-data.html",
    "systems/trinity/templates/actor/partials/bio.html",
    "systems/trinity/templates/actor/partials/character.html",
    "systems/trinity/templates/actor/partials/contacts.html",
    "systems/trinity/templates/actor/partials/bonds.html",
    "systems/trinity/templates/actor/partials/attributes.html",
    "systems/trinity/templates/actor/partials/healthboxes.html",
    "systems/trinity/templates/actor/partials/skills.html",
    "systems/trinity/templates/actor/partials/conditions.html",
    "systems/trinity/templates/actor/partials/defense.html",
    "systems/trinity/templates/actor/partials/edges.html",
    "systems/trinity/templates/actor/partials/paths.html",
    "systems/trinity/templates/actor/partials/specialties.html",
    "systems/trinity/templates/actor/partials/stunts.html",
    "systems/trinity/templates/actor/partials/tricks.html",
    "systems/trinity/templates/actor/partials/gear.html",
    "systems/trinity/templates/actor/partials/armors.html",
    "systems/trinity/templates/actor/partials/vehicles.html",
    "systems/trinity/templates/actor/partials/weapons.html",
    "systems/trinity/templates/actor/partials/facets.html",
    "systems/trinity/templates/actor/partials/inspiration.html",
    "systems/trinity/templates/actor/partials/gifts.html",
    "systems/trinity/templates/actor/partials/all-items.html",
    "systems/trinity/templates/actor/partials/saved-rolls.html",
    "systems/trinity/templates/actor/partials-npc/npc-attributes.html",
    "systems/trinity/templates/actor/partials-npc/npc-stats.html",
    "systems/trinity/templates/actor/partials-npc/npc-edit.html",
    "systems/trinity/templates/actor/partials-npc/npc-main.html",
    "systems/trinity/templates/item/partials/complication-flag.html",
    "systems/trinity/templates/item/partials/enhancement-flag.html",
    "systems/trinity/templates/item/partials/injury-flag.html",
    "systems/trinity/templates/item/partials/dots-flag.html",
    "systems/trinity/templates/item/partials/item-flag.html",
    "systems/trinity/templates/item/partials/stunt-data.html",
    "systems/trinity/templates/item/partials/roll-flag.html",
    "systems/trinity/templates/item/partials/stunt-list.html",
    "systems/trinity/templates/item/partials/tag-list.html",
    "systems/trinity/templates/item/partials/power-list.html",
    "systems/trinity/templates/item/partials/primary-value.html",
    "systems/trinity/templates/item/partials/top-traits.html",
    "systems/trinity/templates/item/partials/attribute-settings.html",
    "systems/trinity/templates/actor/partials/unflagged.html",
    "systems/trinity/templates/actor/partials/talent.html",
    "systems/trinity/templates/actor/partials/psi.html",
    "systems/trinity/templates/actor/partials/nova.html",
    "systems/trinity/templates/actor/partials/actions.html",
    "systems/trinity/templates/actor/partials/combat.html",
    "systems/trinity/templates/actor/partials/initiative.html",
    "systems/trinity/templates/roll/partials/roll-overlay.html",
    "systems/trinity/templates/roll/partials/item-box.html",
    "systems/trinity/templates/roll/partials/roll-chip.html"
  ];
  return loadTemplates( templatePaths );
}
