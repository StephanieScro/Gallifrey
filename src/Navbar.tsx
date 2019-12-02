import  React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars } from '@fortawesome/free-solid-svg-icons';

export interface IProps {
    
}

export const TopNavBar: React.FC = () => {
  const [navBar, setNavBar] = useState(false);
  return <div className="flex flex-row">
  {navBar && 
<div className="w-25 vertical-nav bg-white" id="sidebar">
  
  <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>

  <ul className="nav flex-column bg-white mb-0">
    <li className="nav-item">
      <a href="#" className="nav-link text-dark font-italic bg-light">
            <FontAwesomeIcon icon={faCode} className="fa fa-picture-o mr-3 text-primary fa-fw"></FontAwesomeIcon>
                Home
            </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-dark font-italic">
            <FontAwesomeIcon icon={faCode} className="fa fa-picture-o mr-3 text-primary fa-fw"></FontAwesomeIcon>
                About
            </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-dark font-italic">
            <FontAwesomeIcon icon={faCode} className="fa fa-picture-o mr-3 text-primary fa-fw"></FontAwesomeIcon>
                Avaliable
            </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-dark font-italic">
                <FontAwesomeIcon icon={faCode} className="fa fa-picture-o mr-3 text-primary fa-fw"></FontAwesomeIcon>
                Portfolio
            </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-dark font-italic">
                <FontAwesomeIcon icon={faCode} className="fa fa-picture-o mr-3 text-primary fa-fw"></FontAwesomeIcon>
                News
            </a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link text-dark font-italic">
                <FontAwesomeIcon icon={faCode} className="fa fa-picture-o mr-3 text-primary fa-fw"></FontAwesomeIcon>
                Contact
            </a>
    </li>
  </ul>
</div>}

<div className="page-content p-5" id="content">
  <button id="sidebarCollapse" type="button">
    <small onClick={() => setNavBar(!navBar)}><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></small></button>
</div>
  </div>
}