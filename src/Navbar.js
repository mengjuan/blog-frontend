import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav>
    <section>
      <Link to="/tech">技术</Link>
      <Link to="/life">生活</Link>
      <Link to="/aboutUs">关于我们</Link>
    </section>
  </nav>
)