import Container from './components/Container';
import Text from './components/Text';
import Shape from './components/Shape';
import Image from './components/Image';

function App() {
  return (
    <Container backgroundColor="bg-gradient-to-br from-purple-100 to-pink-100">
      <Text
        text="More music, no limits!"
        font="font-bold"
        color="text-purple-800"
        size="text-4xl"
        position={{ x: 50, y: 50 }}
      />
      
      <Shape
        type="heart"
        color="#ec4899"
        size={60}
        position={{ x: 100, y: 150 }}
      />
      
      <Shape
        type="star"
        color="#eab308"
        size={50}
        position={{ x: 200, y: 150 }}
      />
      
      <Shape
        type="circle"
        color="#3b82f6"
        size={45}
        position={{ x: 300, y: 150 }}
      />
      
      <Shape
        type="flower"
        color="#84cc16"
        size={55}
        position={{ x: 400, y: 150 }}
      />
      
      <Shape
        type="cloud"
        color="#64748b"
        size={65}
        position={{ x: 150, y: 250 }}
      />
      
      <Shape
        type="butterfly"
        color="#8b5cf6"
        size={50}
        position={{ x: 250, y: 250 }}
      />
      
      <Shape
        type="moon"
        color="#6366f1"
        size={45}
        position={{ x: 350, y: 250 }}
      />
      
      <Shape
        type="square"
        color="#ef4444"
        size={45}
        borderRadius={8}
        position={{ x: 450, y: 250 }}
      />
      
      <Text
        text="Click on shapes to hear sounds and see animations!"
        color="text-gray-600"
        size="text-lg"
        position={{ x: 50, y: 350 }}
      />

      <Image
        src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94"
        alt="Beautiful sunset"
        width={300}
        height={200}
        position={{ x: 50, y: 400 }}
        description="A stunning sunset over the mountains"
        rounded={true}
      />

      <Image
        src="https://images.unsplash.com/photo-1501426026826-31c667bdf23d"
        alt="Peaceful lake"
        width={250}
        height={180}
        position={{ x: 380, y: 400 }}
        description="Tranquil lake surrounded by nature"
        rounded={true}
      />
    </Container>
  );
}

export default App;