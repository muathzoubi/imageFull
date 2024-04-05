import './App.css';
import ImageLists, { ImageModal } from './images';
function App() {
  const images = [
    {
      id: 1,
      src: 'https://media.istockphoto.com/id/1413606459/photo/research-experiment-and-medical-trial-being-done-by-a-scientist-in-a-lab-science-facility-or.jpg?s=1024x1024&w=is&k=20&c=yuKafsrPkimYpCVonqf2Dw7uKPcNvT6WMzv_9Py6K-Q=',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1534644107580-3a4dbd494a95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      src: 'https://media.istockphoto.com/id/1476756309/photo/farmer-harvesting-soybeans.jpg?s=1024x1024&w=is&k=20&c=AIPpBmPb8HEukBOpG8Kvwl0twPz1OoodDyrae-8PPcM=',
    },
    {
      id: 4,
      src: 'https://media.istockphoto.com/id/858675626/photo/cowgirls-and-cowboy-line-up-waiting-to-go-for-a-ride-in-the-morning.jpg?s=1024x1024&w=is&k=20&c=qV-25GWr5Zh5c_lS3lUSPSpv0xUPzSDjV1W2xOq3UXo=',
    },
   
    {
      id: 6,
      src: 'https://media.istockphoto.com/id/1394055240/photo/happy-black-female-chef-preparing-food-in-frying-pan-at-restaurant-kitchen.jpg?s=1024x1024&w=is&k=20&c=ACYmz8UwOlA0M-4nAlX_Y4kY95OoVpNwZyGOr4B1tTc=',
    },
    {
      id: 7,
      src: 'https://media.istockphoto.com/id/1278840957/photo/houses-by-the-sea.jpg?s=1024x1024&w=is&k=20&c=GpSmh1LNg59nv3FBvdLSVRwdwNpknGoNWa5tv6LLa-w=',
    },
    {
      id: 8,
      src: 'https://media.istockphoto.com/id/1948463768/photo/aerial-view-of-campground-along-the-beach.jpg?s=1024x1024&w=is&k=20&c=zHm7yjqQtTsXgbgMxiqKuVR6sIdE46gmcnKwb4VnY1M=',
    },
  ];
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ImageModal />
        <ImageLists images={images} />
      </div>
    </>
  );
}

export default App;
