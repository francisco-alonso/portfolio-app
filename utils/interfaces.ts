interface CustomLinkI {
    href: string;
    title: string;
    className?: string;
};

interface EducationProps {
    type: string;
    time?: string;
    place: string;
    info?: string;
};

interface ExperienceProps {
    position: string;
    company: string;
    companyLink: string;
    time?: string;
    address: string;
    work?: string;
};

interface StaticImage {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };

interface FeaturedProjectProps {
    type: string;
    title: string;
    summary: string;
    img: StaticImage;
    link: string;
    github?: string;
}