import css from './HomePageSkeleton.module.scss';

function HomePageSkeleton() {
    return (
        <div className={css['home']}>
            <div className={css['home_aside']}>
                <div className={css['skeleton-box']} style={{ width: '100%', height: '300px' }}></div>
            </div>
            <div className={css['home_main']}>
                <div className={css['home_cards']}>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className={css['skeleton-card']}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePageSkeleton;
