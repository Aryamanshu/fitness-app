// Web worker for handling search filtering in the background
self.addEventListener('message', (event) => {
  const { exercises, searchTerm } = event.data;
  
  if (!exercises || !Array.isArray(exercises) || exercises.length === 0) {
    self.postMessage({ filteredExercises: [] });
    return;
  }
  
  if (!searchTerm || searchTerm.trim() === '') {
    self.postMessage({ filteredExercises: exercises });
    return;
  }
  
  const term = searchTerm.toLowerCase().trim();
  
  // Filter exercises in the background
  const filteredExercises = exercises.filter(
    (item) => item.name.toLowerCase().includes(term) ||
              item.target.toLowerCase().includes(term) ||
              item.equipment.toLowerCase().includes(term) ||
              item.bodyPart.toLowerCase().includes(term)
  );
  
  // Send the filtered results back to the main thread
  self.postMessage({ filteredExercises });
});
