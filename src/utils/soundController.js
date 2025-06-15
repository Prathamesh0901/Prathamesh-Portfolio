let soundEnabled = true;

export function isSoundEnabled() {
  return soundEnabled;
}

export function toggleSound(state) {
  soundEnabled = state;
}

export function playSound(audio) {
  if (!soundEnabled) return;
  audio.currentTime = 0;
  audio.play().catch((e) => console.warn("Sound play error", e));
}
