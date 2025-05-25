interface CustomLinkI {
    href: string;
    title: string;
    className?: string;
};

interface CustomLinkMobileI {
    href: string;
    title: string;
    className?: string;
    toggle: () => void;
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
    work: () => JSX.Element;
};

interface StaticImage {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };

interface FeaturedProjectProps {
    type?: string;
    title: string;
    summary: string;
    img: StaticImage;
    link: string;
    github?: string;
}

interface CVPositionProps {
    id: string;
    context: string;
    tasks: JSX.Element[];
    environement: JSX.Element[];
}