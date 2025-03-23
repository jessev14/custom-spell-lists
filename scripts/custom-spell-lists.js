const moduleID = 'custom-spell-lists';

const lg = x => console.log(x);

Hooks.once('init', () => {
    game.settings.register(moduleID, 'spellListJournalID', {
        name: 'Custom Spell List Journal ID',
        scope: 'world',
        config: true,
        requiresReload: true,
        type: String
    });
});

Hooks.once('setup', () => {
    const customSpellJournal = fromUuidSync(game.settings.get(moduleID, 'spellListJournalID'));
    if (!customSpellJournal) return;

    customSpellJournal.pages.forEach(p => {
        dnd5e.registry.spellLists.register(p.uuid);
    });
});
