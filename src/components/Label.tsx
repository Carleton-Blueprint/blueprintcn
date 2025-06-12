export default function Label({ text }: { text: string }) {
  return <span className="bg-red-500 rounded-full py-2 px-4">{text}</span>;
}
