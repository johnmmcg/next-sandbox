'use client'
import { FormEvent, useState, ChangeEvent, MouseEvent } from 'react'

export default function List() {
  const [list, setList] = useState<string[]>([])
  const [inputValue, setInputValue] = useState<string>('')

  const addToList = (event: FormEvent) => {
    event.preventDefault()
    setList((oldList) => [inputValue, ...oldList])
    setInputValue('')
  }

  const deleteFromList = (event: React.MouseEvent, index: number) => {
    event.preventDefault()
    setList((oldList) => oldList.filter((_, i) => i !== index))
  }

  const mapList = (list: string[]) => {
    return list.map((item, index) => (
      <li
        className="group flex list-inside list-disc flex-row items-center justify-between rounded-full border border-base-300 bg-base-300 p-2 pl-6"
        key={index}
      >
        <span>{item}</span>
        <button
          className="transitiion btn-error btn-circle btn opacity-0 group-hover:opacity-100"
          onClick={(event) => deleteFromList(event, index)}
        >
          X
        </button>
      </li>
    ))
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">List</h1>
      <form onSubmit={(event) => addToList(event)} className="form-control">
        <div className="input-group">
          <input
            placeholder="Add to list..."
            id="addToListInput"
            className="input-primary input"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button className="btn-primary btn" type="submit">
            Add
          </button>
        </div>
      </form>
      <ul className="flex flex-col gap-1">{mapList(list)}</ul>
    </div>
  )
}
