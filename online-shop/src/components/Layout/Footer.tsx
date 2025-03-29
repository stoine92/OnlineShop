import { FC } from "react";
import { Link } from "react-router";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import css from "./Footer.module.scss";

const Footer: FC = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footer_content}>
                <div className={css.footer_section}>
                    <span className={css["footer_section-title"]}>About Us</span>
                    <span className={css["footer_section-text"]}>
                        Result-driven Frontend developer with expertise in React, TypeScript and API
                        Integrations. Skilled in building scalable, high-performance travel and booking
                        platforms, focusing on UI/UX, performance optimisation and full booking flows.
                        Passionate about delivering responsive, dynamic web applications that enhance
                        user experience.
                    </span>
                </div>
                <div className={css.footer_section}>
                    <span className={css["footer_section-title"]}>Quick Links</span>
                    <Link className={css["footer_section-link"]} to="/">About</Link>
                </div>
                <div className={css.footer_section}>
                    <span className={css["footer_section-title"]}>Follow Us</span>
                    <a
                        className={css["footer_section-social"]}
                        href="https://www.linkedin.com/in/stoyan-n-660a0491/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInIcon /> <span>LinkedIn</span>
                    </a>
                </div>
            </div>
            <div className={css.footer_bottom}>
                <span>&copy; {new Date().getFullYear()} Online Shop. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;