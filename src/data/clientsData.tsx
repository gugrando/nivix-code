// data/clientsData.ts
'use client';
import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

//Instalar biblioteca FA para icones

export interface Client {
  id: number;
  companyName: string;
  description: string;
  socialLinks: { icon: React.ReactNode; url: string }[];
  imagePath: string;
}

export const clients: Client[] = [
  {
    id: 1,
    companyName: "Forno e Famiglia",
    description: "Social Media e Gestão de Tráfego Pago",
    imagePath: "/logoclientes4.png",                                                        
    socialLinks: [
      { icon: <FaFacebook size={18} />, url: "#" },
      { icon: <FaGooglePlusG size={18} />, url: "#" },
      { icon: <FaLinkedin size={18} />, url: "#" },
      { icon: <FaPinterest size={18} />, url: "#" },
      { icon: <FaTwitter size={18} />, url: "#" },
    ],
  },
  {
    id: 2,
    companyName: "Familia Italia",
    description: "Tráfego Pago, Gestão de Social Media e Desenvolvimento de Site",
    imagePath: "/logoclientes1.png",
    socialLinks: [
      { icon: <FaFacebook size={18} />, url: "#" },
      { icon: <FaGooglePlusG size={18} />, url: "#" },
      { icon: <FaLinkedin size={18} />, url: "#" },
      { icon: <FaPinterest size={18} />, url: "#" },
      { icon: <FaTwitter size={18} />, url: "#" },
    ],
  },
  {
    id: 3,
    companyName: "Hober Pizzaria",
    description: "Social Media e Gestão de Tráfego Pago",
    imagePath: "/logoclientes2.png",
    socialLinks: [
      { icon: <FaFacebook size={18} />, url: "#" },
      { icon: <FaGooglePlusG size={18} />, url: "#" },
      { icon: <FaLinkedin size={18} />, url: "#" },
      { icon: <FaPinterest size={18} />, url: "#" },
      { icon: <FaTwitter size={18} />, url: "#" },
    ],
  },
  {
    id: 4,
    companyName: "Anabela - Forno a Lenha",
    description: "Consultoria estratégica, social media e gestão de tráfego pago",
    imagePath: "/logoclientes3.png",
    socialLinks: [
      { icon: <FaFacebook size={18} />, url: "#" },
      { icon: <FaGooglePlusG size={18} />, url: "#" },
      { icon: <FaLinkedin size={18} />, url: "#" },
      { icon: <FaPinterest size={18} />, url: "#" },
      { icon: <FaTwitter size={18} />, url: "#" },
    ],
  },
  {
    id: 5,
    companyName: "Hober Pizzaria",
    description: "Social Media, Gestão de Tráfego Pago e Controle de Delivery/ERP",
    imagePath: "/logoclientes2.png",
    socialLinks: [
      { icon: <FaFacebook size={18} />, url: "#" },
      { icon: <FaGooglePlusG size={18} />, url: "#" },
      { icon: <FaLinkedin size={18} />, url: "#" },
      { icon: <FaPinterest size={18} />, url: "#" },
      { icon: <FaTwitter size={18} />, url: "#" },
    ],
  },
];