'use client'
import useSWR from 'swr'

const URL = 'https://jsonplaceholder.typicode.com/posts/1/comments'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function FetchExample() {
  const { data, error, isLoading } = useSWR(URL, fetcher)

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <h2 className="text-xl font-bold">Fetch Example</h2>
      {error && <div>Failed to load.</div>}
      {isLoading && <div>Loading...</div>}
      <ul>
        {data?.map((comment: { name: string; id: string }) => (
          <li className="list-disc" key={comment.id}>
            <h3>{comment.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}
