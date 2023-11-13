import { FC } from "react"
import styles from './DownloadButton.module.scss';

type Props = {
    children: React.ReactNode
    href: string

}
export const DownloadButton: FC<Props> = ({ children, href }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = href
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return <button className={`${styles.downloadButton} ${styles.cta}`} onClick={handleDownload}> {children}</button >
}
