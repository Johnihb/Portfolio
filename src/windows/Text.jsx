import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  if (!data) return null

  return (
    <>
      <div className="" id='window-header'>
        <WindowControls target={'txtfile'} />
        <h2>{data.name}</h2>
      </div>

      <div className="p-4">
        {data.image && 
        <img src={data.image}  alt={data.imageAlt || data.imageDescription || data.name || ''} className="mb-4 h-70 rounded-2xl" />
        }
        {data.subtitle && <h3 className="text-lg font-semibold mb-2">{data.subtitle}</h3>}
        {data.description && data.description.map((para, index) => (
          <p key={index} className="mb-2 text-justify">{para}</p>
        ))}
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')

export default TextWindow