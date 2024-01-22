export default function NumberItem({ number, text }: { number: string, text: string }) {
    return (
        <div className="flex flex-col md:flex-row mx-auto md:mx-0 text-center md:text-start space-x-2">
            <h1 className="text-5xl font-black">{number}</h1>
            <p className="w-32">{ text }</p>
          </div>
    );
}