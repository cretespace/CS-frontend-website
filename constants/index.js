export const individualSignupInfo = [
  {
    icon: "/signUp/checkbox.svg",
    text: "In-app order tracking",
    subtext:
      "Monitor the progress of your requests in real time from start to finish.",
  },
  {
    icon: "/signUp/cloud.svg",
    text: "Cloud file storage (2GB)",
    subtext: "Securely save, retrieve, and manage your documents anytime.",
  },
  {
    icon: "/signUp/pay.svg",
    text: "Pay-per-service, no subscription",
    subtext: "Only pay when you place an order, no monthly or annual charges.",
  },
  {
    icon: "/signUp/file.svg",
    text: "Access to CRETESPACE templates",
    subtext: "Use ready-made document and design templates to save time.",
  },
];

export const businessSignupInfo = [
  {
    icon: "/signUp/headphone.svg",
    text: "Dedicated CRETESPACE Agent",
    subtext:
      "A personal support representative to handle and follow up on all your business requests.",
  },
  {
    icon: "/signUp/cloud.svg",
    text: "Extended  cloud file storage (15gb)",
    subtext: "Store and manage all your company documents without worrying about storage limits.",
  },
  {
    icon: "/signUp/checkbox.svg",
    text: "Order Tracking & Management",
    subtext: "Monitor all company service requests, deadlines, and deliveries in real-time.",
  },
  {
    icon: "/signUp/file.svg",
    text: "Access to premium business templates ",
    subtext: "Access ready-made templates for proposals, reports, letters, and other business documents.",
  },
];

export const studentSignupInfo = [
  {
    icon: "/signUp/headphone.svg",
    text: "Academic Support Chat",
    subtext:
      "Chat with CRETESPACE agents who understand student and academic needs.",
  },
  {
    icon: "/signUp/cloud.svg",
    text: "Digital Backpack (2GB)",
    subtext: "Store your notes, books, and school documents safely online.",
  },
  {
    icon: "/signUp/pay.svg",
    text: "Pay-per-service Model",
    subtext: "No subscription required, only pay when you request a service.",
  },
  {
    icon: "/signUp/file.svg",
    text: "File Conversion & Formatting Tools",
    subtext: "Easily convert documents and auto-format references (APA, MLA, etc.) for academic use.",
  },
];

export const bCenterSignupInfo = [
  {
    icon: "/signUp/headphone.svg",
    text: "Customized Support from the Team",
    subtext:
      "Receive dedicated assistance, training, and priority help tailored for franchise partners.",
  },
  {
    icon: "/signUp/bag.svg",
    text: "Free Business Tools & Discounted Services",
    subtext: "Use premium tools at no extra cost and enjoy discounts on CRETESPACE services to boost profitability.",
  },
  {
    icon: "/signUp/devices.svg",
    text: "Admin Tools for Managing Orders",
    subtext: "Get a full dashboard to organize, track, and complete client requests with ease.",
  },
  {
    icon: "/signUp/file.svg",
    text: "Free Expert-Designed Marketing Templates",
    subtext: "Access ready-made flyers, posters, and digital assets to promote your business centre.",
  },
];

export const formItems = {
  Individual: [
    { label: "First Name", placeholder: "First Name", type: "text" },
    { label: "Last Name", placeholder: "Last Name", type: "text" },
    { label: "Country", placeholder: "Country", type: "select-country" },
    { label: "Gender", placeholder: "Gender", type: "select" },
    { label: "Date of Birth", placeholder: "Date of Birth", type: "date" },
    { label: "Phone Number", placeholder: "Phone Number", type: "tel" },
    { label: "Email", placeholder: "Email", type: "email" },
    { label: "Password", placeholder: "Password", type: "password" },
    { label: "Confirm Password", placeholder: "Confirm Password", type: "password" },
  ],

  Business: [
    { label: "Business Name", placeholder: "Business Name", type: "text" },
    { label: "Business Address", placeholder: "Business Address", type: "text" },
    { label: "Contact Person Name", placeholder: "Contact Person Name", type: "text" },
    { label: "Contact Person role", placeholder: "Password", type: "password" },
    { label: "Country", placeholder: "Confirm Password", type: "select" },
    { label: "Business Phone Number", placeholder: "Business Phone Number", type: "phone" },
    { label: "Email", placeholder: "email", type: "email" },
    { label: "Password", placeholder: "Password", type: "password" },
    { label: "Confirm Password", placeholder: "Confirm Password", type: "password" },
  ],

  Student: [
    { label: "First Name", placeholder: "First Name", type: "text" },
    { label: "Last Name", placeholder: "Last Name", type: "text" },
    { label: "Name of School / Institution", placeholder: "Name of School / Institution", type: "text" },
    { label: "Registration No.", placeholder: "Registration No.", type: "text" },
    { label: "Comapny", placeholder: "Country", type: "text" },
    { label: " Phone Number", placeholder: " Phone Number", type: "phone" },
    { label: " Upload School ID", upload:true },
    { label: "Email", placeholder: "Email", type: "email" },
     { label: "Password", placeholder: "Password", type: "password" },
    { label: "Confirm Password", placeholder: "Confirm Password", type: "password" },

  ],

  "Business Center": [
    { label: "Business Name", placeholder: "Business Name", type: "text" },
    { label: "Business Address", placeholder: "Business Address", type: "text" },
    { label: "Contact Person Name", placeholder: "Contact Person Name", type: "text" },
    { label: "Contact Person role", placeholder: "Password", type: "password" },
    { label: "Country", placeholder: "Confirm Password", type: "select" },
    { label: "Business Phone Number", placeholder: "Business Phone Number", type: "phone" },
    { label: "Number of Employees", placeholder: "Number of Employees", type: "text" },
    { label: "Why do you want to partner with CRETESPACE?", placeholder: "Answer", type: "text" },
    { label: " Upload School ID", upload:true },

    { label: "Email", placeholder: "Password", type: "email" },
    { label: "Password", placeholder: "Password", type: "password" },
    { label: "Confirm Password", placeholder: "Confirm Password", type: "password" },
  ],
};


