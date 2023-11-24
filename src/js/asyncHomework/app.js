import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log('Loaded saving:', saving);
}, (error) => {
  console.error('Error loading saving:', error);
});

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log('Loaded saving:', saving);
  } catch (error) {
    console.error('Error loading saving:', error.message);
  }
})();
