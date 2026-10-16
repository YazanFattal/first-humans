export const STORAGE_KEY = 'firstHumans.experience.v1';
export const CHAPTER_IDS = ['origins', 'communication', 'decisions', 'learning'];
const copy = value => JSON.parse(JSON.stringify(value));
export function initialState() {
  return { version: 1, lastChapter: 'origins', observed: [], communication: { intention: 'come', cues: ['gesture'], seen: [], combined: false, response: '' }, decisions: { choices: {}, compared: [] }, learning: { toolMatches: [], campInspected: [], campChoice: '', sequence: [] }, completed: [], journal: [] };
}
function normalize(value) {
  const base = initialState();
  if (!value || value.version !== 1) return base;
  const strings = (items, allowed) => Array.isArray(items) ? [...new Set(items.filter(x => typeof x === 'string' && (!allowed || allowed.includes(x))))].slice(0, 30) : [];
  base.lastChapter = CHAPTER_IDS.includes(value.lastChapter) ? value.lastChapter : 'origins';
  base.observed = strings(value.observed, ['people','river','camp','stone']);
  base.completed = strings(value.completed, CHAPTER_IDS);
  const comm = value.communication || {};
  base.communication.intention = ['danger','come','share'].includes(comm.intention) ? comm.intention : 'come';
  base.communication.cues = strings(comm.cues, ['gesture','gaze','face','body','vocal']);
  base.communication.seen = strings(comm.seen, ['danger','come','share']);
  base.communication.combined = comm.combined === true;
  base.communication.response = typeof comm.response === 'string' ? comm.response.slice(0, 1500) : '';
  const decisions = value.decisions || {};
  for (const id of ['food','help','explore','cooperate']) if ([0,1].includes(decisions.choices?.[id])) base.decisions.choices[id] = decisions.choices[id];
  base.decisions.compared = strings(decisions.compared, ['food','help','explore','cooperate']);
  const learning = value.learning || {};
  base.learning.toolMatches = strings(learning.toolMatches, ['fibre','shell']);
  base.learning.campInspected = strings(learning.campInspected, ['river','ridge','raised']);
  base.learning.campChoice = ['river','ridge','raised'].includes(learning.campChoice) ? learning.campChoice : '';
  base.learning.sequence = strings(learning.sequence, ['observe','roles','assemble','check']);
  base.journal = Array.isArray(value.journal) ? value.journal.filter(x => x && typeof x.text === 'string').slice(-60).map(x => ({ id: String(x.id || '').slice(0,100), chapter: CHAPTER_IDS.includes(x.chapter) ? x.chapter : 'origins', text: x.text.slice(0,600), at: typeof x.at === 'string' ? x.at.slice(0,40) : '' })) : [];
  return base;
}
export function createExperienceStore(storage) {
  let target = storage, persistent = true, state = initialState();
  try { if (target === undefined) target = window.localStorage; const saved = target?.getItem(STORAGE_KEY); if (saved) state = normalize(JSON.parse(saved)); if (!target) persistent = false; } catch { persistent = false; }
  function save() { try { if (!target) throw new Error('storage'); target.setItem(STORAGE_KEY, JSON.stringify(state)); persistent = true; } catch { persistent = false; } }
  const store = {
    get: () => copy(state),
    get persistent() { return persistent; },
    update(change) { const draft = copy(state); change(draft); state = normalize(draft); save(); return copy(state); },
    record(id, chapter, text) { store.update(draft => { if (!draft.journal.some(entry => entry.id === id)) draft.journal.push({ id, chapter, text, at: new Date().toISOString() }); }); },
    complete(id) { store.update(draft => { if (!draft.completed.includes(id)) draft.completed.push(id); }); store.record('complete-'+id, id, 'Completed this chapter and its activities.'); },
    reset() { state = initialState(); try { if (!target) throw new Error('storage'); target.removeItem(STORAGE_KEY); persistent = true; } catch { persistent = false; } return copy(state); }
  };
  return store;
}
