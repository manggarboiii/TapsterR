import React from 'react'
import './Contacts.css'

function Contacts() {
  return (
    <div className="Contactcontainer">
        <div className="conthead">
            <h3>Contact Me</h3>
        </div>
        <div className="columns">
        <a className="links" href="https://wa.me/">Whatsapp</a>
        <a className="links" href="https://instagram.com/tapsterr.id?igshid=Zjc2ZTc4Nzk=">Instagram</a>
        <a className="links" href="https://www.behance.net/">Behance</a>
        <a className="links" href="https://www.tiktok.com/">TikTok</a>
        <a className="links" href="https://www.youtube.com/">YouTube</a>
        </div>
    </div>
  )
}

export default Contacts