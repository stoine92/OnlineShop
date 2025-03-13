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
    results?: number;
};

const SectionMain = ({ children, title, results }: SectionMainProps) => {
    return (
        <div className={css['section_main']}>
            <div className={css['section_title']}>
                <span className={css['section_title-text']}>{title}</span>
                {results ? <span className={css['section_title-subtext']}>{`${results} results`}</span> : null}
            </div>
            {children}
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

const SectionCards = ({ children }: SectionMainProps) => {
    return (
        <div className={css['section_cards']}>
            {children}
        </div>
    )
}

Section.Cards = SectionCards;


export default Section;