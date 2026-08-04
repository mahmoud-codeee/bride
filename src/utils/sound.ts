/**
 * Synthesized paper/envelope opening whoosh, generated on the fly with the
 * Web Audio API — no audio file needed. Filtered white noise with a quick
 * attack/decay envelope and a downward frequency sweep.
 */
export function playEnvelopeSound() {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AudioContextClass();
    const duration = 0.35;
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + duration);
    filter.Q.value = 0.7;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    noise.connect(filter).connect(gain).connect(ctx.destination);
    noise.start();
    noise.stop(ctx.currentTime + duration);
    noise.onended = () => {
      if (ctx.state !== "closed") ctx.close().catch(() => {});
    };
  } catch {
    // Web Audio unavailable — sound is a non-essential enhancement, skip silently.
  }
}
