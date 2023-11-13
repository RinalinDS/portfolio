import { FC } from "react"
import styles from './../Footer.module.scss'

type Props = {
    href: string
    altText: string
    img: string
}
export const SocialIcon: FC<Props> = ({ href, img, altText }) => <div className={styles.icon}>
    <a href={href} target={'_blank'} rel='noreferrer'><img src={img} alt={href} /></a>
</div>