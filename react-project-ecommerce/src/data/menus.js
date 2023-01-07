import electronic from "../images/sponsor-logo/electronic.svg";
import electronictech from "../images/sponsor-logo/electronictech.svg";
import scapingtech from "../images/sponsor-logo/scapingtech.svg";
import spacing from "../images/sponsor-logo/spacing.svg";
import tech from "../images/sponsor-logo/tech.svg";
import camerahero from "../images/hero/camerahero.svg";
import speakerBig from "../images/hero/speakerBig.svg";
import headphone from "../images/popular-products/headphone.svg";
import tableSpeaker from "../images/latest-news/tableSpeaker.svg";
import speakerSmall from "../images/hero/speakerSmall.svg";
import laptopSmall from "../images/hero/laptopSmall.svg";
import cameraSmall from "../images/hero/cameraSmall.svg";

export const menus = [
  {
    title: "Home",
    position: 1,
    children: [
      {
        title: "Home Children 1",
        position: 1,
      },
      {
        title: "Home Children 2",
        position: 2,
      },
    ],
  },
  {
    title: "Catalog",
    position: 2,
    children: [
      {
        title: "Catalog Children 1",
        position: 1,
      },
      {
        title: "Catalog Children 2",
        position: 2,
      },
      {
        title: "Catalog Children 3",
        position: 3,
      },
    ],
  },
  {
    title: "Blog",
    position: 3,
    children: [],
  },
  {
    title: "Pages",
    position: 4,
    children: [
      {
        title: "Pages Children 1",
        position: 1,
      },
      {
        title: "Pages Children 2",
        position: 2,
      },
      {
        title: "Pages Children 3",
        position: 3,
      },
    ],
  },
  {
    title: "About Us",
    position: 5,
    children: [],
  },
];

export const catagories = [
  {
    title: "Browse categories",
    position: 1,
    children: [
      {
        title: "Pages Children 1",
        position: 1,
      },
      {
        title: "Pages Children 2",
        position: 2,
      },
      {
        title: "Pages Children 3",
        position: 3,
      },
    ],
  },
];

export const heroInfo = [
  {
    id: "camera",
    img: camerahero,
    price: "only $89",
    title: "Canon camera",
  },
  {
    id: "big speaker",
    img: speakerBig,
    price: "only $999",
    title: "JBL speaker",
  },
  {
    id: "wireless headphone",
    img: tableSpeaker,
    price: "only $1",
    title: "Wireless Headphone",
  },
];

export const heroslider = [
  {
    id: "speaker",
    img: speakerSmall,
    title: "Speaker",
    quantity: "(6 items)",
  },
  {
    id: "camera",
    img: cameraSmall,
    title: "DSLR camera",
    quantity: "(6 items)",
  },
  {
    id: "laptop",
    img: laptopSmall,
    title: "Desktop & laptop",
    quantity: "(6 items)",
  },
  {
    id: "speaker",
    img: speakerSmall,
    title: "Speaker",
    quantity: "(6 items)",
  },
  {
    id: "camera",
    img: cameraSmall,
    title: "DSLR camera",
    quantity: "(6 items)",
  },
  {
    id: "laptop",
    img: laptopSmall,
    title: "Desktop & laptop",
    quantity: "(6 items)",
  },
];

export const sponsors = [
  {
    id: "sponsor-1",
    img: electronic,
  },
  {
    id: "sponsor-2",
    img: electronictech,
  },
  {
    id: "sponsor-3",
    img: scapingtech,
  },
  {
    id: "sponsor-4",
    img: spacing,
  },
  {
    id: "sponsor-5",
    img: tech,
  },
];

export const peoples = [
  {
    data: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    name: "Savannah Nguyen",
  },
  {
    data: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    name: "Esther Howard",
  },
  {
    data: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.",
    name: "Esther Howard",
  },
];
