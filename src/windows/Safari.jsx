import { WindowControls } from '#components'
import { blogPosts } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { MoveRight, ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import React from 'react'

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target='safari' />

        <PanelLeft className='ml-10 icon' />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className='icon' />
          <ChevronRight className='icon' />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className='icon' />
          <div className="search">
            <Search className='icon' />

            <input type="text" placeholder='Search or enter website name'
              className='flex-1' />          </div>
        </div>


        <div className="flex items-center gap-5 ">
          <Share className='icon' />
          <Plus className='icon' />
          <Copy className='icon' />
        </div>
      </div>


      <div className="blog">
        <h2 className="text-2xl mb-3">My Thoughts</h2>

        <div className="space-y-8">{
          blogPosts.length > 0 ?
          blogPosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>


              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  Check Out the full post <MoveRight className='icon-hover' />
                </a>
              </div>
            </div>
          ))
        :
        <p className='mt-0 leading-9'>
          
        This is where I'll drop deep thoughts about code, life, and why my CSS works on localhost but not in production.,
          <br />
        Coming soon: tutorials I wish existed when I started, hot takes nobody asked for, and probably a rant about JavaScript.,
        <br />
Currently in 'draft mode'—aka I have 47 half-written posts and zero published ones. Stay tuned though, I promise the wait will be worth it... probably. 😅
        </p>
        }</div>
      </div>
    </>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari')



export default SafariWindow