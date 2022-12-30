import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Header.scss'

function Header() {
  return (
    <header>
      <section className='user-identity'>
        <img className='avatar' src='images/avatar.JPG' width={20} height={20} alt="" />
        <a href="/">Owoahene <span>Joe</span></a>
      </section>
      <section className='subscribe'>
        <form>
          <fieldset>
            <input type="email" aria-label='Your email address' placeholder='example@gmail.com' />
            <button>Subscribe</button>
          </fieldset>
        </form>
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
