import { FC } from 'react'

const Grid: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-40">
      <div className="bg-gray-100 h-64"></div>
      <div className="bg-gray-200 h-64"></div>
      <div className="bg-gray-300 h-64"></div>
      <div className="bg-gray-400 h-64"></div>
      <div className="bg-gray-500 h-64"></div>
      <div className="bg-gray-600 h-64"></div>
    </div>
  )
}