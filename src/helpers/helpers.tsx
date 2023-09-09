import React from 'react';
import { Job } from '@/components/subcomponents/Job';

export const experienceItems: Array<ExperienceProps> = [
    {
        position: 'Software Engineer, Frontend',
        company: 'Symphony Communications',
        companyLink: 'www.symphony.com',
        time: 'Apr, 2022 - Oct, 2023',
        work: () => (
            <Job
                context='Symphony is a company focused on providing secure and compliant communication to the biggest financial institutions in the world like JP Morgan, HSBC or Goldman Sachs.'
                tasks={[
                    <> -Backbone migration. A big codebase has been migrated to <strong>React 16</strong> in order to reduce vulnerabilities. Vulnerabilities have been reduced by <strong>70%</strong> according to SNYK monitoring.</>,
                    <> -Improvement of the account creation process via CSV up to <strong>10 times faster</strong>. Using web-workers, the CSV is split into series of batches that run in the background. Users can continue to use Symphony portal while accounts are being created.</>,
                    <> -Design of a <strong>new release process</strong> for a frontend application.</>,
                    <> -Conducted thorough <strong>unit and integration testing</strong> and debugging of features, resulting in a <strong>~40%</strong> reduction in bugs and issues reported by users.</>,
                    <> -Participated in regular code reviews, providing constructive feedback to colleagues and maintaining code quality standards.</>,
                    <> -<strong>Product demos</strong> for 10 different customers.</>,
                    <> -Developed and enhanced features for a chat application used by thousands of users, contributing to improved user engagement and satisfaction.</>,
                ]}
                environement={[
                    <><strong>Frontend: </strong>React / Redux / Webpack / Gulp</>,
                    <><strong>Testing: </strong>Enzyme / Jest / Jasmine / TS mockito</>,
                    <><strong>Cloud: </strong>AWS (ECR, ECS, EC2 & Docker)</>,
                    <><strong>Continous Integration: </strong>Jenkins / Groovy</>,
                    <><strong>Software Methodology: </strong>Agile</>,
                ]}
            />
        ),
    },
    {
        position: 'Software Engineer, Full-stack',
        company: 'Cubica Comunicacion',
        companyLink: 'www.cubicacomunicacion.com',
        time: 'Feb, 2021 - Apr, 2022',
        work: () => (
            <Job
                tasks={[
                    <> -Architected and developed a robust trip management CRM system, streamlining the process of tracking, selling, and managing trips to Riviera Maya and Mexico.</>,
                    <> -Collaborated with cross-functional teams to design and implement user role systems, enabling seamless management of administrators, suppliers, and vendor users.</>,
                    <> -Implemented an invoice generation module, allowing customers to receive trip invoices in PDF format via WhatsApp for a convenient booking experience.</>,
                    <> -Implemented tracking functionalities to monitor monthly sales, revenue collection, and supplier earnings, facilitating data-driven decision-making.</>,
                    <> -Designed and integrated a dynamic trip creation feature with seasonal discount capabilities, enhancing customer engagement and promoting sales.</>,
                    <> -Created a fully responsive ensuring optimal performance across various devices.</>,
                ]}
                environement={[
                    <><strong>Frontend: </strong>Gatsby / Redux / Webpack</>,
                    <><strong>Testing: </strong>Enzyme / Jest / Jasmine / TS mockito</>,
                    <><strong>Cloud: </strong>Azure</>,
                    <><strong>Software Methodology: </strong>Kanban</>,
                ]}
            context='Cubica is a company focused on Web/App design and implemnetation for different customers in industries like restauration and travel industry. We are looking to create a system that will allow us to keep track of the trips (Riviera Maya and Mexico) that the company offers. The company buys the trips from external suppliers and sells them at a higher price. The difference is where the company margin lies.'/>
        ),
    },
    {
        position: 'Bank Administrative Assitant',
        company: 'Santander Bank',
        companyLink: 'www.satanderbank.com',
        time: 'Jan, 2019 - Sept, 2019',
        work: () => (
            <Job
                tasks={[
                    <> -Making copies, faxing documents and providing optimum administrative support to employees.</>,
                    <> -Carry out various administrative tasks, including answering the telephone, taking and passing on messages, writing memos, making copies, downloading documents and welcoming visitors.</>,
                ]}
                environement={[
                    <>Power BI</>,
                    <>Excel</>,
                ]}
            context='Santander is a global blank focused on financial services. The brand offers mortgages, credit cards, saving accounts and much more.'/>
        ),
    },
    {
        position: 'Software Developer, Intern',
        company: 'Balidea',
        companyLink: 'www.balidea.com',
        time: 'Jul, 2016 - Sept, 2016',
        work: () => (
            <Job
                tasks={[
                    <> -<strong>60%</strong> reduction of bug fixes.</>,
                    <> -Feature for filtering of customers according to hospital section (oncology, digestive, etc.).</>,
                    <> -Code reviews.</>,
                    <> -Estimation of tasks with Product Owners.</>,
                ]}
                environement={[
                    <><strong> -Stack</strong>: PHP, Javascript and JQuery</>,
                    <><strong> -Database</strong>: MySQL</>,
                    <><strong> -Software methodology</strong>: Agile</>,
                ]}
            context='Balidea offers consulting services to different customer to ntegrating software and externalize technology'/>
        ),
    },
];

export const educationItems: Array<EducationProps> = [
    {
        type: 'Bachelor Degree - Software Engineering',
        time: 'Sept, 2015 - Feb. 2020',
        info: 'My software engineering degree journey was filled with coding, problem-solving, and collaboration. It immersed me in the world of tech and ignited a passion for innovation. The community of like-minded peers and late-night coding sessions enriched my experience. I tackled diverse projects, from mobile apps to web platforms, seeing the broad impact of software engineering. Though challenging, the journey strengthened my determination and skills. Looking back, my degree was a solid foundation for my tech career, equipping me to adapt to the evolving industry. Overall, it was an exciting adventure of learning, teamwork, and personal growth.',
        place: 'University of Vigo'
    },
    {
        type: 'Bachelor Degree - Business Management',
        time: 'Sept, 2015 - Feb. 2020',
        info: `It involved engaging in economic debates and delving into the intricate world of financial statements to evaluate and value companies.
                Throughout my studies, I honed critical skills in analyzing financial data, which provided a solid foundation for making informed business decisions.
                The degree exposed me to various aspects of managing organizations, from strategic planning to leadership.`,
        place: 'University of Vigo'
    },
]

