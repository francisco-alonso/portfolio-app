import React from 'react';
import { Job } from '@/components/subcomponents/Job';

export const experienceItems: Array<ExperienceProps> = [
    {
        position: 'Senior Software Engineer',
        company: 'Schmeider Electric',
        companyLink: 'www.se.com',
        time: 'Sept, 2023 - Present',
        work: () => (
            <Job
                id='1'
                context='Schneider Electric leverages IoT through its EcoStruxure platform to enhance energy efficiency, automation, and real-time system monitoring. It integrates connected devices, analytics, and edge control across industries.'
                tasks={[
                    <>- Architected an event driven alert management system to trigger user alerts based on real time device data. With this data users can create conditions (based on its value) and the system will be able to notify the user if anything is unusual.</>,
                    <>- Implemented a FIFO strategy for database scalability and sizing to ensure reliable event processing under high load.</>,
                    <>- Implemented licensing controls to stop data collection and data computation restrictions when platform licenses expire.</>,
                    <>- Tech support for 3 junior devs</>,
                ]}
                environement={[
                    <><strong>Frontend: </strong>Vue & Pinia for state management</>,
                    <><strong>Backend: </strong>Golang & MQTT for asycn communication</>,
                    <><strong>Cloud: </strong>On-Prem Infra</>,
                    <><strong>Software Methodology: </strong>Agile</>,
                ]}
            />
        ),
    },
    {
        position: 'Software Engineer',
        company: 'Symphony Communications',
        companyLink: 'www.symphony.com',
        time: 'Apr, 2022 - Oct, 2023',
        work: () => (
            <Job
                id='2'
                context='Symphony is a company focused on providing secure and compliant communication to the biggest financial institutions in the world like JP Morgan, HSBC or Goldman Sachs.'
                tasks={[
                    <>- Contributed to the modernization and security of one the main products through framework migration.</>,
                    <>- Improved development workflows, and collaboration.</>,
                    <>- Led initiatives to enhance system performance, reliability, and test coverage.</>,
                    <>- Shaped release strategies for new products, addressing critical security vulnerabilities, and supporting the development of administrative tools.</>,
                ]}
                environement={[
                    <><strong>Frontend: </strong>Gatsby / Redux / Webpack</>,
                    <><strong>Backend: </strong>Golang</>,
                    <><strong>Testing: </strong>Enzyme / Jest</>,
                    <><strong>Cloud: </strong>AWS ECR & GCP GKE</>,
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
                id='3'
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
                id='4'
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
                id='5'                
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

