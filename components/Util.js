
export const durationParse = (time) => {
	const sec = Math.floor(time % 60);
	time /= 60;
	const min = Math.floor(time % 60);
	time /= 60;
	const hours = Math.floor(time % 24);
  let string = '';
  if (hours !== 0) string += hours + 'h ';
  if (min !== 0) string += min + 'm ';
  if (sec !== 0) string += sec + 's'
  return string;
};

export const categories = [
  'Social',
  'Exercise & Sports', 
  'Literature', 
  'Visual Arts',
  'Music', 
  'Cooking',
  'Relaxation',
  'Outdoors',
  'Games',
  'Crafts',
  'Performance',
  'Other'
];

export const categoryColors = {
  'Social': 'steelblue',
  'Exercise & Sports': 'yellowgreen', 
  'Literature': 'deepskyblue', 
  'Visual Arts': 'tomato',
  'Music': 'teal', 
  'Cooking': 'orange',
  'Relaxation': 'coral',
  'Outdoors': 'goldenrod',
  'Games': 'darkblue',
  'Crafts': 'saddlebrown',
  'Performance': 'mediumorchid',
  'Other': 'black'
};

export const categoryIcons = {
  'Social': 'users',
  'Exercise & Sports': 'heartbeat', 
  'Literature': 'book', 
  'Visual Arts': 'paint-brush',
  'Music': 'music', 
  'Cooking': 'cutlery',
  'Relaxation': 'cloud',
  'Outdoors': 'leaf',
  'Games': 'compass',
  'Crafts': 'paper-plane',
  'Performance': 'magic',
  'Other': 'child'
};


export const initialData = [
  {
    key: 1,
    title: 'Read a book',
    category: 'Literature',
    duration: 60,
    alarm: false,
    airplaneMode: false,
    timeSpent: 0,
  },
  {
    key: 2,
    title: 'Exercise',
    category: 'Exercise & Sports',
    duration: 90,
    alarm: false,
    airplaneMode: false,
    timeSpent: 0
  },
  {
    key: 3,
    title: 'Meditate',
    category: 'Relaxation',
    duration: 30,
    alarm: false,
    airplaneMode: false,
    timeSpent: 0
  }
];