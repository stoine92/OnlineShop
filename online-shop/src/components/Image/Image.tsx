import css from "./Image.module.scss";

interface ImageProps {
    img: string;
    alt: string;
}

const Image = ({ img, alt }: ImageProps) => {
    return (
        <div className={css['image']}>
            <img className={css['image-placeholder']} loading="lazy" src={img} alt={alt} />
        </div>
    )
}

export default Image