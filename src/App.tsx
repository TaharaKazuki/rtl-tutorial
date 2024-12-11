import { useListPets } from './gen/pets/pets';

function App() {
  const { data: pets } = useListPets();

  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl">React Testing Library</h1>
      <p className="mt-4 text-gray-700">
        {pets?.map((pet) => (
          <p key={pet.id}>{pet.name}</p>
        ))}
      </p>
    </div>
  );
}
export default App;
