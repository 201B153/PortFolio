import {
  talakunchi,
  upwork,
  fsd,
  rust,
  security,
  golang,
  eventgo,
  onhandblogs,
  t_master,
  shopcula,
  ide,
  dev_bot,
  lead_me,
  dmail,
  pictoral,
} from '../assets';
import {
  socials,
  socialLinks,
  technologies,
  BsFillFileEarmarkPdfFill,
  BsLinkedin,
  BsTwitter,
  BsArrowDownSquare,
  BsArrowUpSquare,
  BsFillPlayCircleFill,
  FaCoffee,
  FaGithubAlt,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaRust,
  FaDocker,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaReddit,
  FaYoutube,
  FaDev,
  SiBlogger,
  SiCodechef,
  SiCodeforces,
  SiDevpost,
  SiFreelancer,
  SiGmail,
  SiHackerearth,
  SiHashnode,
  SiJest,
  SiKalilinux,
  SiLeetcode,
  SiMedium,
  SiPatreon,
  SiRedis,
  SiUnrealengine,
  SiUpwork,
  SiWebassembly,
  TbBrandCodepen,
  TbBrandCodesandbox,
  TbBrandFigma,
  TbBrandFiverr,
  TbBrandGolang,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandTypescript,
  TbCurrencySolana,
} from './icons';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full-stack developer',
    icon: fsd,
    link: 'fsd_proj',
  },
  {
    title: 'Go Developer',
    icon: golang,
    link: 'go_prog',
  },
  {
    title: 'Rust Developer',
    icon: rust,
    link: 'rust_proj',
  },
  {
    title: 'Web Penetration Tester',
    icon: security,
    link: 'about',
  },
];

const experiences = [
  {
    title: 'Cyber Security Intern',
    company_name: 'Telakunchi',
    icon: talakunchi,
    iconBg: '#FF0000',
    date: 'May 2022 - July 2022',
    points: [
      'Scanning for vulnerabilities in web applications.',
      'Checking database for any vulnerabilities and fixing them using SQL injections and other related techs.',
      'Collaborating with teams and other cybersecurity professionals to provide secure netowork.',
      'Providing reports on vulnerabilities and their fixes on daily basis.',
    ],
  },
  // {
  //   title: 'Backend Developer Intern',
  //   company_name: 'EduCheck',
  //   icon: upwork,
  //   iconBg: '#FFF',
  //   date: 'Sep 2022 - Now',
  //   points: [
  //     'Developing and maintaining full scale web applications using related techns.',
  //     'Collaborating with clients and other developers to create high-quality products.',
  //     'Implementing responsive designs and providing optimised websites.',
  //     'Implementing SEO and ensuring cross-browser compatibility.',
  //   ],
  // },
  {
    title: 'FreeLancer',
    company_name: 'UpWork | Fiverr | Freelancer.com',
    icon: upwork,
    iconBg: '#FFF',
    date: 'Sep 2022 - Now',
    points: [
      'Developing and maintaining full scale web applications using related techns.',
      'Collaborating with clients and other developers to create high-quality products.',
      'Implementing responsive designs and providing optimised websites.',
      'Implementing SEO and ensuring cross-browser compatibility.',
    ],
  },
];

const projects = {
  projects1: [
    {
      name: 'Template Master',
      description:
        'A CLI tool to help other CLI tools and their users, basically a smart CLI tool. It makes running CLI commands more interactive and simplify them to NLP with help of AI.',
      tags: [
        {
          name: 'npm',
          color: 'pink-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'typescript',
          color: 'blue-text-gradient',
        },
      ],
      image: t_master,
      source_code_link: 'https://github.com/mstomar698/t_master',
      live_demo_link: 'https://www.npmjs.com/package/t_master',
    },
    {
      name: 'eventogo',
      description:
        'A web platform that enables more interactive event management and planning. It uses chatGPT to offer suggestions for events to aid in better event planning.',
      tags: [
        {
          name: 'next',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'chatgpt',
          color: 'blue-text-gradient',
        },
      ],
      image: eventgo,
      source_code_link: 'https://github.com/mstomar698/eventgo',
      live_demo_link: 'https://eventgo.vercel.app/',
    },
    {
      name: 'OnHandBlogs',
      description:
        'An easy-to-use software that allows users to create and interact with their blogs and get the code for their blog apps on GitHub and host them securely in few steps.',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: onhandblogs,
      source_code_link: 'https://github.com/mstomar698/onHandBlogs',
      live_demo_link: 'https://on-hand-blogs.vercel.app/',
    },
    {
      name: 'ShopCula',
      description:
        'A web platform where users can make purchases of items and also be a  provider to provide items with global coverage and well built user and admin dashboards.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'express',
          color: 'black-text-gradient',
        },
      ],
      image: shopcula,
      source_code_link: 'https://github.com/mstomar698/ShopCula',
      live_demo_link: 'https://ecommerce-shop-201b153.herokuapp.com/',
    },
    {
      name: 'Universal IDE',
      description:
        'A easy-to-use Online IDE where you can run your codes, create projects, run projects  and save them. Users can also solve competitive programming questions.',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: ide,
      source_code_link: 'https://github.com/mstomar698/Universal-IDE',
      live_demo_link: 'https://universal-ide.vercel.app/',
    },
  ],
  projects2: [
    {
      name: 'Dev Bot',
      description:
        'A slack bot that helps developers in asking better questions when interacting in the organization and answers basic technical questions to ease doubt clearing processes.',
      tags: [
        {
          name: 'go',
          color: 'blue-text-gradient',
        },
        {
          name: 'wolfram',
          color: 'pink-text-gradient',
        },
        {
          name: 'slack',
          color: 'black-text-gradient',
        },
      ],
      image: dev_bot,
      source_code_link: 'https://github.com/mstomar698/dev-bot',
      live_demo_link:
        'https://join.slack.com/t/dev-lokworkspace/shared_invite/zt-1tvm17lw7-Mo2nU~YUAfMIH4aWSJie8g',
    },
  ],
  projects3: [
    {
      name: 'Pictoral',
      description:
        'A web platform that allows users to manipulate image, apply transformation, cartoonify, and many other functionalities without any delay and quality reduction.',
      tags: [
        {
          name: 'webassembly',
          color: 'black-text-gradient',
        },
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'rust',
          color: 'pink-text-gradient',
        },
      ],
      image: pictoral,
      source_code_link: 'https://github.com/mstomar698/pictoral',
      live_demo_link: 'https://github.com/mstomar698/pictoral',
    },
    {
      name: 'DMail',
      description:
        'An easy-to-use web platform where users can send and receive emails over web3 network with decryption at extreme secrecy with hexa decoding and less delay.',
      tags: [
        {
          name: 'solana',
          color: 'black-text-gradient',
        },
        {
          name: 'rust',
          color: 'pink-text-gradient',
        },
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'web3',
          color: 'green-text-gradient',
        },
      ],
      image: dmail,
      source_code_link: 'https://github.com/mstomar698/DMail',
      live_demo_link: 'https://github.com/mstomar698/DMail',
    },
    {
      name: 'Lead Me',
      description:
        'A simple tool made to comfort users in bookmarking and leading them to most visited urls with quick call in browser. It is easy to modify as per requirements.',
      tags: [
        {
          name: 'rust',
          color: 'pink-text-gradient',
        },
        {
          name: 'browser',
          color: 'black-text-gradient',
        },
        {
          name: 'https',
          color: 'blue-text-gradient',
        },
      ],
      image: lead_me,
      source_code_link: 'https://github.com/mstomar698/lead-me',
      live_demo_link: 'https://github.com/mstomar698/lead-me',
    },
  ],
};

export {
  services,
  technologies,
  experiences,
  projects,
  socials,
  socialLinks,
  BsFillFileEarmarkPdfFill,
  BsLinkedin,
  BsTwitter,
  BsArrowDownSquare,
  BsArrowUpSquare,
  BsFillPlayCircleFill,
  FaCoffee,
  FaGithubAlt,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaRust,
  FaDocker,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaReddit,
  FaYoutube,
  FaDev,
  SiBlogger,
  SiCodechef,
  SiCodeforces,
  SiDevpost,
  SiFreelancer,
  SiGmail,
  SiHackerearth,
  SiHashnode,
  SiJest,
  SiKalilinux,
  SiLeetcode,
  SiMedium,
  SiPatreon,
  SiRedis,
  SiUnrealengine,
  SiUpwork,
  SiWebassembly,
  TbBrandCodepen,
  TbBrandCodesandbox,
  TbBrandFigma,
  TbBrandFiverr,
  TbBrandGolang,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandThreejs,
  TbBrandTypescript,
  TbCurrencySolana,
};
