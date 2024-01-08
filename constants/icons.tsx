import { styles } from '@/app/styles';
import {} from '@/assets';
import {
  BsFillFileEarmarkPdfFill,
  BsLinkedin,
  BsTwitter,
  BsArrowDownSquare,
  BsArrowUpSquare,
  BsFillPlayCircleFill,
} from 'react-icons/bs';
import {
  FaGithubAlt,
  FaCoffee,
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
  FaWhatsapp,
} from 'react-icons/fa';
import {
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
} from 'react-icons/tb';
import {
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
} from 'react-icons/si';

const socials = [
  {
    id: 'github',
    name: 'Github',
    link: 'https://github.com/mstomar698',
    logo: (
      <FaGithubAlt
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mayank-tomar-726187205/',
    logo: (
      <BsLinkedin
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'twitter',
    name: 'Twitter',
    link: 'https://twitter.com/tomarm698',
    logo: (
      <BsTwitter className={`${styles.heroSubText} h-full w-full`} />
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    link: 'https://www.instagram.com/mstomar698',
    logo: (
      <FaInstagram
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'facebook',
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100052845513759',
    logo: (
      <FaFacebook
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'discord',
    name: 'Discord',
    link: 'https://discord.gg/vZ39CpR6cf',
    logo: (
      <FaDiscord className={`${styles.heroSubText} h-full w-full`} />
    ),
  },
  {
    id: 'gmail',
    name: 'Mail',
    link: 'mailto:tomarm698@gmail.com',
    logo: (
      <SiGmail className={`${styles.heroSubText} h-full w-full`} />
    ),
  },
  {
    id: 'youtube',
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCUaTg45NXZYMPO37hkjWZGw',
    logo: (
      <FaYoutube className={`${styles.heroSubText} h-full w-full`} />
    ),
  },
  {
    id: 'devpost',
    name: 'Devpost',
    link: 'https://devpost.com/mstomar698',
    logo: (
      <SiDevpost className={`${styles.heroSubText} h-full w-full`} />
    ),
  },
  {
    id: 'hackerearth',
    name: 'HackerEarth',
    link: 'https://www.hackerearth.com/@tomarm698',
    logo: (
      <SiHackerearth
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    link: 'https://leetcode.com/mstomar698/',
    logo: (
      <SiLeetcode
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    link: 'https://www.codechef.com/users/mayank201b153',
    logo: (
      <SiCodechef
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'codepen',
    name: 'CodePen',
    link: 'https://codepen.io/mstomar698',
    logo: (
      <TbBrandCodepen
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'codeSandbox',
    name: 'codeSandbox',
    link: 'https://codesandbox.io/u/mstomar698',
    logo: (
      <TbBrandCodesandbox
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'blooger',
    name: 'blogger',
    link: 'https://www.blogger.com/profile/03052391752830080459',
    logo: (
      <SiBlogger className={`${styles.heroSubText} h-full w-full`} />
    ),
  },
  {
    id: 'devto',
    name: 'DevTo',
    link: 'https://dev.to/mstomar698',
    logo: (
      <FaDev className={`${styles.heroSubText} h-full w-full`} />
    ),
  },
  // {
  //   id: 'medium',
  //   name: 'Medium',
  //   link: 'https://medium.com/@tomarm698',
  //   logo: (
  //     <SiMedium
  //       className={`${styles.heroSubText} h-full w-full`}
  //     />
  //   ),
  // },
  // {
  //   id: 'hashnode',
  //   name: 'Hashnode',
  //   link: 'https://github.com',
  //   logo: (
  //     <SiHashnode
  //       className={`${styles.heroSubText} h-full w-full`}
  //     />
  //   ),
  // },
  // {
  //   id: 'patreon',
  //   name: 'Patreon',
  //   link: 'https://github.com',
  //   logo: (
  //     <SiPatreon
  //       className={`${styles.heroSubText} h-full w-full`}
  //     />
  //   ),
  // },
  {
    id: 'upwork',
    name: 'Upwork',
    link: 'https://www.upwork.com/freelancers/~01bb1d053f82b69aab',
    logo: (
      <SiUpwork className={`${styles.heroSubText} h-full w-full`} />
    ),
  },
  {
    id: 'freelancer.com',
    name: 'FreeLancer.com',
    link: 'https://www.freelancer.in/u/Mstomar698',
    logo: (
      <SiFreelancer
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
  {
    id: 'fiverr',
    name: 'Fiverr',
    link: 'https://www.fiverr.com/mayank_201b153',
    logo: (
      <TbBrandFiverr
        className={`${styles.heroSubText} h-full w-full`}
      />
    ),
  },
];

const socialLinks = [
  {
    id: 'cv',
    name: 'Résumé',
    link: 'https://drive.google.com/file/d/1DHbd9Hz4ZanLXiI7JsJGgw1v1ecAENk8/view?usp=sharing',
    icons: <BsFillFileEarmarkPdfFill className={`${styles.heroSubText}`} />,
  },
  {
    id: 'github',
    name: 'Github',
    link: 'https://github.com/mstomar698',
    icons: <FaGithubAlt className={`${styles.heroSubText}`} />,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mayank-tomar-726187205/',
    icons: <BsLinkedin className={`${styles.heroSubText}`} />,
  },
  {
    id: 'twitter',
    name: 'Twitter',
    link: 'https://twitter.com/tomarm698',
    icons: <BsTwitter className={`${styles.heroSubText}`} />,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    logo: <FaHtml5 className="h-full w-full " />,
    proficiency: '95%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'CSS 3',
    logo: <FaCss3Alt className="h-full w-full" />,
    proficiency: '95%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'JavaScript',
    logo: <TbBrandJavascript className="h-full w-full" />,
    proficiency: '95%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'TypeScript',
    logo: <TbBrandTypescript className="h-full w-full" />,
    proficiency: '80%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'React JS',
    logo: <TbBrandReact className="h-full w-full" />,
    proficiency: '95%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Next JS',
    logo: <TbBrandNextjs className="h-full w-full" />,
    proficiency: '90%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Redux Toolkit',
    logo: <TbBrandRedux className="h-full w-full" />,
    proficiency: '70%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Tailwind CSS',
    logo: <TbBrandTailwind className="h-full w-full" />,
    proficiency: '98%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Node JS',
    logo: <FaNode className="h-full w-full" />,
    proficiency: '90%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'MongoDB',
    logo: <TbBrandMongodb className="h-full w-full" />,
    proficiency: '90%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Redis',
    logo: <SiRedis className="h-full w-full" />,
    proficiency: '90%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Three JS',
    logo: <TbBrandThreejs className="h-full w-full" />,
    proficiency: '70%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Jest',
    logo: <SiJest className="h-full w-full" />,
    proficiency: '70%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'GO',
    logo: <TbBrandGolang className="h-full w-full" />,
    proficiency: '80%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Rust',
    logo: <FaRust className="h-full w-full" />,
    proficiency: '75%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Web Assembly',
    logo: <SiWebassembly className="h-full w-full" />,
    proficiency: '70%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Solana',
    logo: <TbCurrencySolana className="h-full w-full" />,
    proficiency: '75%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Kali',
    logo: <SiKalilinux className="h-full w-full" />,
    proficiency: '70%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'Unreal',
    logo: <SiUnrealengine className="h-full w-full" />,
    proficiency: '65%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'git',
    logo: <FaGithubAlt className="h-full w-full" />,
    proficiency: '90%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'docker',
    logo: <FaDocker className="h-full w-full" />,
    proficiency: '90%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
  {
    name: 'figma',
    logo: <TbBrandFigma className="h-full w-full" />,
    proficiency: '90%',
    width: 'w-32',
    bgColor: '#FF0000',
  },
];

export {
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
  FaWhatsapp,
  socials,
  socialLinks,
  technologies,
};
