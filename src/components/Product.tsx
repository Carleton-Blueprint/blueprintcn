import Button from './Button';
import useTheme from '@/hooks/useTheme';

export default function Product({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`border-black border-2 ${
        isDarkMode ? 'bg-stone-700' : 'bg-stone-200'
      } rounded-lg shadow-md overflow-hidden`}
    >
      <img
        src="https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w="
        alt="Product Image"
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col items-center space-y-4 justify-center p-4">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-lg">{description}</p>
        <Button />
      </div>
    </div>
  );
}
