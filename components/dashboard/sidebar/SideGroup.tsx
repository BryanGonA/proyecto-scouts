import Link from 'next/link'
import { SideLinkProps } from './SideLink'

export interface SideGroupProps {
    children?: React.ReactElement<SideLinkProps> | React.ReactElement<SideLinkProps>[],
}

export default function SideGroup({children}: SideGroupProps) {
    return(
        <div>
            {children}
        </div>

    )

}