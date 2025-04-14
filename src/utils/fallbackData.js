// Fallback data to use when the API fails
export const fallbackBodyParts = [
  'all',
  'back',
  'cardio',
  'chest',
  'lower arms',
  'lower legs',
  'neck',
  'shoulders',
  'upper arms',
  'upper legs',
  'waist'
];

// Map body part names to their display names
export const bodyPartDisplayNames = {
  'all': 'All',
  'back': 'Back',
  'cardio': 'Cardio',
  'chest': 'Chest',
  'lower arms': 'Lower Arms',
  'lower legs': 'Lower Legs',
  'neck': 'Neck',
  'shoulders': 'Shoulders',
  'upper arms': 'Upper Arms',
  'upper legs': 'Upper Legs',
  'waist': 'Waist'
};

export const fallbackExercises = [
  {
    id: 'fallback-0001',
    name: 'barbell bench press',
    bodyPart: 'chest',
    target: 'pectorals',
    equipment: 'barbell',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Bench+Press'
  },
  {
    id: 'fallback-0002',
    name: 'pull up',
    bodyPart: 'back',
    target: 'lats',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Pull+Up'
  },
  {
    id: 'fallback-0003',
    name: 'squat',
    bodyPart: 'upper legs',
    target: 'quads',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Squat'
  },
  {
    id: 'fallback-0004',
    name: 'deadlift',
    bodyPart: 'back',
    target: 'spine',
    equipment: 'barbell',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Deadlift'
  },
  {
    id: 'fallback-0005',
    name: 'push up',
    bodyPart: 'chest',
    target: 'pectorals',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Push+Up'
  },
  {
    id: 'fallback-0006',
    name: 'dumbbell curl',
    bodyPart: 'upper arms',
    target: 'biceps',
    equipment: 'dumbbell',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Dumbbell+Curl'
  },
  {
    id: 'fallback-0007',
    name: 'tricep dip',
    bodyPart: 'upper arms',
    target: 'triceps',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Tricep+Dip'
  },
  {
    id: 'fallback-0008',
    name: 'plank',
    bodyPart: 'waist',
    target: 'abs',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Plank'
  },
  {
    id: 'fallback-0009',
    name: 'leg press',
    bodyPart: 'upper legs',
    target: 'quads',
    equipment: 'machine',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Leg+Press'
  },
  {
    id: 'fallback-0010',
    name: 'lunges',
    bodyPart: 'upper legs',
    target: 'glutes',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Lunges'
  },
  {
    id: 'fallback-0011',
    name: 'crunches',
    bodyPart: 'waist',
    target: 'abs',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Crunches'
  },
  {
    id: 'fallback-0012',
    name: 'shoulder press',
    bodyPart: 'shoulders',
    target: 'delts',
    equipment: 'dumbbell',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Shoulder+Press'
  },
  {
    id: 'fallback-0013',
    name: 'lat pulldown',
    bodyPart: 'back',
    target: 'lats',
    equipment: 'cable',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Lat+Pulldown'
  },
  {
    id: 'fallback-0014',
    name: 'calf raises',
    bodyPart: 'lower legs',
    target: 'calves',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Calf+Raises'
  },
  {
    id: 'fallback-0015',
    name: 'dumbbell rows',
    bodyPart: 'back',
    target: 'upper back',
    equipment: 'dumbbell',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Dumbbell+Rows'
  },
  {
    id: 'fallback-0016',
    name: 'chest fly',
    bodyPart: 'chest',
    target: 'pectorals',
    equipment: 'dumbbell',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Chest+Fly'
  },
  {
    id: 'fallback-0017',
    name: 'russian twist',
    bodyPart: 'waist',
    target: 'abs',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Russian+Twist'
  },
  {
    id: 'fallback-0018',
    name: 'jumping jacks',
    bodyPart: 'cardio',
    target: 'cardiovascular system',
    equipment: 'body weight',
    gifUrl: 'https://via.placeholder.com/400x400.png?text=Jumping+Jacks'
  }
];
