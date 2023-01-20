import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Find a best card deal
            <br className="sm:block hidden" /> in few easy step.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                first true generator on the Internet.
                It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures,
                to generate Lorem Ipsum which looks reasonable.
            </p>

            <Button styles="mt-10" />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </div>


    </section>
)


export default CardDeal
