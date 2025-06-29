import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
   
    <footer className="bg-gradient-to-t raleway from-neutral-800 rounded-2xl to-neutral-950 text-white px-6 py-16 mt-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
  
      <div>
        <h3 className="text-[1.5rem] font-semibold mb-4">🌐 About the Project</h3>
        <p className="text-neutral-300 text-sm leading-relaxed">
          This project was built as part of a collaborative hackathon challenge to explore personality, cultural archetypes, and AI-driven insights. 
          We aimed to blend design, data, and storytelling to create something meaningful.
        </p>
        <p className="mt-4 text-neutral-400 italic">"Code with culture. Learn with legacy."</p>
      </div>
  
      <div>
        <h3 className="text-[1.5rem]  font-semibold mb-4 ">👥 Meet the Team</h3>
        <ul className="space-y-4 text-sm">
          <li>
            <p className="font-medium">Shani Rawal — Frontend Lead</p>
            <div className="flex space-x-3 mt-1 text-neutral-400">
              <a href="https://github.com/shanirawal" target="_blank" className="hover:text-white"><GitHubIcon /></a>
              <a href="https://www.linkedin.com/in/shanirawal/" target="_blank" className="hover:text-white"><LinkedInIcon  /> </a>
              <a href="https://x.com/shanirawal07" target="_blank" className="hover:text-white"><XIcon /></a>
            </div>
          </li>
          <li>
            <p className="font-medium">Nitin Dave — Backend Lead</p>
            <div className="flex space-x-3 mt-1 text-neutral-400">
              <a href="https://github.com/nitindavegit" target="_blank" className="hover:text-white"><GitHubIcon /></a>
              <a href="https://x.com/NitinDave77?t=37jHo-4xnqSrGwVrBoyOlQ&s=08" target="_blank" className="hover:text-white"><XIcon /></a>
            </div>
          </li>
          <li>
            <p className="font-medium">Rajesh Mali — Backend</p>
            <div className="flex space-x-3 mt-1 text-neutral-400">
              <a href="https://github.com/Rajeshhh09" target="_blank" className="hover:text-white"><GitHubIcon /></a>
            </div>
          </li>
          <li>
            <p className="font-medium">Yogeshraj Purohit — Research & Content</p>
            <div className="flex mt-1 space-x-3 text-neutral-400">
              <a href="https://www.linkedin.com/in/yogesh-rajpurohit-b0463a311/" target="_blank" className="hover:text-white"><LinkedInIcon /></a>
            </div>
          </li>
        </ul>
      </div>
  
      <div>
        <h3 className="text-[1.5rem] font-semibold mb-4">🔗 Useful Links</h3>
        <ul className="space-y-2 text-neutral-300 text-sm">
          
          <li><a href="https://dandy-antimatter-652.notion.site/Jhalak-22159a96c8ad80ffb31bc7862d09a19a" className="hover:underline">📄 Documentation</a></li>
          <li><a href="https://github.com/shanirawal/jhalak" target="_blank" className="hover:underline">💻 GitHub Repository</a></li>
        </ul>
      </div>
  
    </div>
  
    <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-xs text-neutral-500">
      © 2025 Team 404 Not Founders. Made with 🧠 + 💻 + ☕ during Build.IT. All rights reserved.
    </div>
  </footer>
  

  
  )
}

export default Footer