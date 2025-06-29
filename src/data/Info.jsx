import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee , faBars , faXmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Info = {
    name: 'Ogunsola Faruk' ,
    image: logo ,
    menu: [
        {id:1 ,  name: 'Home' },
        {id:2 , name: 'About'},
        {id:3 , name: 'Project'},
        {id:4, name: 'Experience'},
        {id:5, name: 'Contact'},
    ],
    menuBar: faBars ,
    cancel: faXmark
}

export default Info;