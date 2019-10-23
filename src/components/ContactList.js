import React from 'react';
import Contact from './Contact'


let tab = [
    {
        name:"Holly Stewart",
        url:"https://randomuser.me/api/portraits/women/23.jpg",
        status:true,
        id:1
    },
    {
        name:"Neil Mcdonalid",
        url:"https://randomuser.me/api/portraits/men/85.jpg",
        status:true,
        id:2
    },
    {
        name:"Isobel Harris",
        url:"https://randomuser.me/api/portraits/women/10.jpg",
        status:true,
        id:3
    },
    {
        name:"Chad Thomas",
        url:"https://randomuser.me/api/portraits/men/65.jpg",
        status:true,
        id:4
    },
    {
        name:"Violet Dean",
        url:"https://randomuser.me/api/portraits/women/26.jpg",
        status:true,
        id:5
    }
]

    function ContactList () {
        return tab.map (profil => {
            return <Contact avatar={profil.url} name={profil.name} id={profil.id} online={profil.status} />
        });
    }
    export default ContactList