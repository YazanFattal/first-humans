export function createExperienceAudio(onChange = () => {}) {
  let context = null, noise = null, noiseGain = null, timer = null, cueTimer = null, enabled = false, destroyed = false, generation = 0;
  const voices = new Set();
  function announce(message = '') { onChange({ enabled, message }); }
  function stop() {
    generation++;
    enabled = false;
    clearTimeout(timer); timer = null;
    clearTimeout(cueTimer); cueTimer = null;
    if (noise) { try { noise.stop(); } catch {} noise.disconnect(); noise = null; }
    if (noiseGain) { noiseGain.disconnect(); noiseGain = null; }
    for (const voice of voices) { try { voice.stop(); } catch {} } voices.clear();
    if (context && context.state === 'running') context.suspend().catch(() => {});
    announce();
  }
  function tone(start, end, duration, volume, type = 'sine') {
    if (!enabled || !context) return;
    const osc = context.createOscillator(), gain = context.createGain(), now = context.currentTime;
    osc.type = type; osc.frequency.setValueAtTime(start, now); osc.frequency.exponentialRampToValueAtTime(end, now + duration);
    gain.gain.setValueAtTime(0.0001, now); gain.gain.exponentialRampToValueAtTime(volume, now + 0.03); gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain); gain.connect(context.destination); voices.add(osc);
    osc.onended = () => { voices.delete(osc); osc.disconnect(); gain.disconnect(); };
    osc.start(now); osc.stop(now + duration + 0.03);
  }
  function bird() {
    if (!enabled || destroyed) return;
    tone(1900 + Math.random()*700, 3200 + Math.random()*700, .13, .012);
    timer = setTimeout(bird, 5500 + Math.random()*6500);
  }
  async function enable() {
    if (destroyed || document.hidden) return false;
    const request = ++generation;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) throw new Error('unsupported');
      if (!context) context = new AudioContext();
      await context.resume();
      if (destroyed || document.hidden || request !== generation) return false;
      if (enabled) return true;
      enabled = true;
      const buffer = context.createBuffer(1, context.sampleRate * 3, context.sampleRate), channel = buffer.getChannelData(0);
      let previous = 0;
      for (let i = 0; i < channel.length; i++) { previous = (previous + (Math.random()*2-1)*.025)/1.025; channel[i] = previous * 5; }
      noise = context.createBufferSource(); noise.buffer = buffer; noise.loop = true;
      const filter = context.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 650;
      noiseGain = context.createGain(); noiseGain.gain.value = .055; noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(context.destination); noise.start();
      timer = setTimeout(bird, 1800); announce(); return true;
    } catch { enabled = false; announce('Sound is unavailable here. All interactions also work with text.'); return false; }
  }
  const visibility = () => { if (document.hidden) stop(); };
  document.addEventListener('visibilitychange', visibility);
  return { enable, mute: stop, get enabled() { return enabled; }, playCue(intention) { if (!enabled) return; clearTimeout(cueTimer); cueTimer = null; if (intention === 'danger') { tone(180, 270, .27, .035, 'triangle'); cueTimer = setTimeout(() => { cueTimer = null; tone(220, 150, .25, .025, 'triangle'); }, 300); } else if (intention === 'share') tone(200, 160, .6, .032, 'triangle'); else tone(160, 250, .45, .035, 'triangle'); }, deactivate: stop, destroy() { destroyed = true; stop(); document.removeEventListener('visibilitychange', visibility); if (context) context.close().catch(() => {}); } };
}
