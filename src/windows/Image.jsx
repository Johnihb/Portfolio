import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'
import React from 'react'

const Image = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile?.data

  if (!data) return null

  return (
    <>
      <div className="" id='window-header'>
        <WindowControls target={'imgfile'} />
        <h2>{data.name}</h2>
      </div>

      <div className="flex-1 flex items-center justify-center overflow-hidden p-2">
        {data.imageUrl && <img src={data.imageUrl} alt={data.name} className="max-w-full max-h-full object-contain" />}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')

export default ImageWindow