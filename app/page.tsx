import Image from 'next/image'

export default function Home() {
  return (
    <main>
    <button
    className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
>

    Button
</button>

<button
    className="px-4 py-2 text-white bg-transparent rounded-lg duration-500 hover:bg-indigo-700 active:shadow-lg"
>
    Button
</button>

<button
    className="px-5 py-3 text-white duration-600 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
>
    Button
</button >

<button
    className="px-6 py-3.5 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg"
>
    Button
</button>

<button
    className="px-7 py-4 text-white duration-500 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
>
    Button
</button>
    </main>  
  
  )
}
