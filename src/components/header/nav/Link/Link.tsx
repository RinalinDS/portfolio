import { FC } from "react"

type Props = {
    label: string
    link: string
}
export const Link: FC<Props> = ({ label, link }) => <li><a href={link}>{label}</a></li>