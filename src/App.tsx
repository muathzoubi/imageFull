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
      src: 'https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
