import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import mypic from '../images/my-pic.jpg'
import videographer from '../images/videographer.jpg'
import emailjs from 'emailjs-com'

import {
  Field,
  Label,
  Control,
  Input,
  Button,
  Icon,
  Textarea,
  Notification,
} from 'rbx'

class Main extends React.Component {
  render() {
    function sendEmail(e) {
      e.preventDefault()

      emailjs
        .sendForm(
          'service_tj1yg2f',
          'template_inavision',
          e.target,
          'user_MorFstgNrIZDbSjBDvtv9'
        )
        .then(
          result => {
            console.log(result.text)
          },
          error => {
            console.log(error.text)
          }
        )
      alert('We have received your message and will contact you back soon')
      e.target.reset()
    }

    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={mypic} alt="" />
          </span>
          <p>
            Since graduating from college at UNLV 2004, I have been working as a
            freelancer. My freelance experience began in 2011 when I got my
            start filming weddings. Shortly thereafter, I decided to pursue my
            interest in producing film and video. As a freelancer, I have found
            my niche in editing from transitioning from Final Cut Pro to Adobe
            Premiere. I have edited anything from promos, trailers, short films,
            etc. I won my first award from the Houston World Film Fest back in
            2019, one of the best days of my life. I am currently attending
            NuCamp to learn and earn certification with web development to be
            more versatile, but still have that passion for post production. I
            have an ordinary life, family man with a beautiful wife and two
            awesome kids. Every morning, I workout to start my day right. On the
            weekends, I enjoy spending time with my family and eventually get
            back to traveling.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M2lbPd2B42I"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Jox7yyJwOGs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TEem5A8zWGA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FGGDuSvPUJM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <p>
            We specialize in unique and creative ways to show the world your
            brand.We direct and produce beautiful cinematic short movies for
            weddings, businesses or organizations. Reach your customers with
            video that's designed specifically to support your business' goals.
          </p>
          <p>
            The design of your logo or ad says a lot about your company...an
            understatement. Let us create your logo, ad or social media posts
            that will grab your customers' attention and show them you mean
            business.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={videographer} alt="" />
          </span>

          <p>
            InAvision Media is a production company specializing in visual media
            that delivers impact while engaging its target audience. We know how
            it goes when trying to create fascinating films on a small budget
            without a big crew. InAvision Media has won an award for best crime
            drama short film through Houston World Film Fest.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form onSubmit={sendEmail}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
