import IPFS from "./ipfs";

export default function Caller(){
    const data={
        id:0,
        name: 'Food Shortage for Animals in Forests. Please Help by donating money to deliver food.',
        slug: 'Animal-1',
        category: 'Food,Animal',
        owner_address:'0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
        image: 'https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg',
        Story: 'Wildfires affect all biomes, from forests and savannahs to grasslands and tundra. Even though forests make up only 10% of the total area burned, their higher carbon storage  capacity means that they are responsible for one quarter of all fire-related carbon dioxide emissions. An increasing share of wildfires are due to human activity, intentional or otherwise. In the Northern Hemisphere, most fires are caused by negligence (e.g. burning rubbish and debris, industrial accidents, agricultural overspill etc.), and arson is also sometimes to blame. In some tropical and subtropical regions, forest fires are mostly intentionally set for land-use change, clearing and preparing new areas for cultivation.',
      }
      let content=await JSON.stringify(data);
      let result = await IPFS()[1]({content:content,options});
      console.log(result);
      
}