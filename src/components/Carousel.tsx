type carouselProps = {
    text: string;
    numItems?: number;

}

export default function Carousel({text,numItems}: carouselProps) {

  return (
    <div className= 'bg-blue-800'>
        {text}
        <p>There are {numItems} items.</p>
    </div>
  );
}
