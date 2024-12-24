// import { singingBandVideo } from "../utils";
// import singingBandVideo from '/assets/videos/singingBand.mp4'
import djVideo from '/assets/videos/DJ.mp4'
import singingBandVideo from '/assets/videos/singingband.mp4'
import instagram from "/assets/images/instagram.png";
import whatsapp from "/assets/images/whatsapp.png";
import arohiVideo from "/assets/videos/arohiband.mp4";


import {
    blackImg,
    blueImg,
    highlightFirstVideo,
    highlightFourthVideo,
    highlightSecondVideo,
    highlightThirdVideo,
    whiteImg,
    yellowImg,
  } from "../utils";
  
  export const navLists = ["Join Contest", "Give Away", "Login"];
  
  export const hightlightsSlides = [
    {
      id: 1,
      // textLists: [
      //   "Musical Feast.",
      //   "Engage in the lively Performances.",
      // ],
      // video: singingBandVideo,
      imageLists: ["./assets/images/arohi-removebg-preview.png"],
      video: arohiVideo,
      videoDuration: 4,
    },
    {
      id: 2,
      imageLists: ["./assets/images/djlogo.jpeg"],
      video: djVideo,
      videoDuration: 4,
    },
    // {
    //   id: 3,
    //   textLists: [
    //     "iPhone 15 Pro Max has the",
    //     "longest optical zoom in",
    //     "iPhone ever. Far out.",
    //   ],
    //   video: highlightThirdVideo,
    //   videoDuration: 2,
    // },
    // {
    //   id: 4,
    //   textLists: ["All-new Action button.", "What will yours do?."],
    //   video: highlightFourthVideo,
    //   videoDuration: 3.63,
    // },
  ];
  
  export const models = [
    {
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
    },
    {
      id: 2,
      title: "iPhone 15 Pro in Blue Titanium",
      color: ["#53596E", "#6395ff", "#21242e"],
      img: blueImg,
    },
    {
      id: 3,
      title: "iPhone 15 Pro in White Titanium",
      color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
      img: whiteImg,
    },
    {
      id: 4,
      title: "iPhone 15 Pro in Black Titanium",
      color: ["#454749", "#3b3b3b", "#181819"],
      img: blackImg,
    },
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  
  export const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Sales Policy",
    "Legal",
    "Site Map",
  ];

export const ticketOptions = [
      {
        title: "EARLY BIRD GENERAL ACCESS",
        price: "₹500",
        details: ["PAID FOOD AND DRINKS AVAILABLE"],
      },
      {
        title: "EARLY BIRD COUPLE ENTRY",
        price: "₹999",
        details: ["PAID FOOD AND DRINKS AVAILABLE"],
      },
      {
        title: "EARLY BIRD VIP ACCESS",
        price: "₹1,199",
        details: ["PAID FOOD AND DRINKS AVAILABLE"],
      },
      {
        title: "EARLY BIRD VIP COUPLE ENTRY",
        price: "₹1,999",
        details: ["PAID FOOD AND DRINKS AVAILABLE"],
      },
      {
        title: "EARLY BIRD MIP ACCESS",
        price: "₹2,999",
        details: [
          "Grants access to one Male or one Female to the MIP SEATING Zone",
          "Seats to be allotted on first come first to occupy basis",
          "Unlimited Food and Drinks Available",
        ],
      },
      {
        title: "EARLY BIRD MIP COUPLE ENTRY",
        price: "₹3,999",
        details: [
          "Grants access to a couple to the MIP SEATING Zone",
          "Seats to be allotted on first come first to occupy basis",
          "Unlimited Food and Drinks Available",
        ],
      },
    ]
export const socials = [
        {
          id: "0",
          title: "Instagram",
          iconUrl: instagram,
          url: "https://www.instagram.com/vibrantentertainments/",
        },
        {
          id: "1",
          title: "Whatsapp",
          iconUrl: whatsapp,
          url: "https://www.whatsapp.com/channel/0029VayVZKrFi8xawFT20F1c",
        },
    ];