import React from 'react'
import StyledBookMark from '../styles/bookMarkStyles'
import { containerVariants } from '../styles/layoutStyles'
//@ts-ignore
import vr from '../assets/vr.png'
//@ts-ignore
import bookmark from '../assets/Path 19.svg'

const BookMark = () => {
  return (
    <StyledBookMark
      //@ts-ignore
      cover="https://www.searchpng.com/wp-content/uploads/2018/12/Splash-Instagraam-Icon-Png-1024x1024.png"
      variants={containerVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <div className="hero-background" />
      <img src={bookmark} alt="book-mark-icon" />
      <h2>Insta Bookmark</h2>
      <h3>Technology</h3>
      <img src="../assets/VR.png" alt="" />
    </StyledBookMark>
  )
}

export default BookMark
