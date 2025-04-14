// Default icon for all body parts
import gymIcon from './gym.png';

// Map body part names to their respective icons
export const bodyPartIcons = {
  all: gymIcon,
  back: gymIcon,
  cardio: gymIcon,
  chest: gymIcon,
  'lower arms': gymIcon,
  'lower legs': gymIcon,
  neck: gymIcon,
  shoulders: gymIcon,
  'upper arms': gymIcon,
  'upper legs': gymIcon,
  waist: gymIcon,
};

// Get icon for a specific body part
export const getBodyPartIcon = (bodyPart) => {
  return bodyPartIcons[bodyPart] || gymIcon;
};
