import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <section className='user-identity'>
        <a className='user-identity' href="/">
          <img className='avatar' src='/images/profile.JPEG' width={20} height={20} alt="A profile of Nana Acheampong" />
        </a>
      </section>
      <section className='socials'>
        <a className='button' href="https://twitter.com/owoahene_joseph" target="_blank" rel='noreferrer'>
          <TwitterIcon />
        </a>
        <a className='button' href="https://github.com/myspace8" target="_blank" rel='noreferrer'>
          <GitHubIcon />
        </a>
      </section>
    </header>
  )
}

export default Header
