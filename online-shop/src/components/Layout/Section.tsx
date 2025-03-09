import { ReactNode } from "react";
import css from "./Section.module.scss";


interface SectionProps {
    children: ReactNode
}

const Section = ({ children }: SectionProps ) => {

    const classes = [
        css.section,
    ];

    return (
        <div className={classes.join(" ")}>
            {children}
        </div>
    )
};

interface SectionMainProps {
    children: ReactNode;
    title?: string;
};

const SectionMain = ({ children, title }: SectionMainProps) => {
    return (
        <div className={css['section_main']}>
            <div className={css['section_title']}>
                <span className={css['section_title-text']}>{title}</span>
                <span>6-10 results</span>
            </div>
            <div className={css['section_main-content']}>
                {children}
            </div>
        </div>
    )
}

Section.Main = SectionMain;

interface SectionAsideProps extends SectionMainProps {};

const SectionAside = ({ children, title }: SectionAsideProps) => {
    return (
        <div className={css['section_aside']}>
            <div className={css['section_header']}>
                <span className={css['section_header-text']}>{title}</span>
            </div>
            <div className={css['section_body']}>
                {children}
            </div>
        </div>
    )
}

Section.Aside = SectionAside;


export default Section;