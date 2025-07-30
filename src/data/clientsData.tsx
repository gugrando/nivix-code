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
    companyName: "Empresa X",
    description: "Especializada em soluções tecnológicas inovadoras.",
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
    description: "Comércio varejista focado em qualidade e atendimento.",
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
    description: "Prestadora de serviços empresariais com excelência.",
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
    description: "Consultoria em TI e desenvolvimento personalizado.",
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
    description: "Inovação em hardware e soluções integradas.",
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