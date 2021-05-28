import StoryCard from './storyCard';

const stories = [
  {
    name: 'Mark Zuckerberg1',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf'
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk'
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p'
  },
  {
    name: 'Mark Zuckerberg2',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf'
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy'
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map(({ name, src, profile }) => 
        <StoryCard key={name} name={name} src={src} profile={profile}/>)}
    </div>
  )
}

export default Stories
