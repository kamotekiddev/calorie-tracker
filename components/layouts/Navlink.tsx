'use client';
import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { buttonVariants } from '../ui/button';
import { usePathname } from 'next/navigation';

type NavlinkProps = LinkProps & {
    children: ReactNode;
};
function Navlink(props: NavlinkProps) {
    const pathname = usePathname();

    const isActive = pathname === props.href;

    return (
        <Link
            {...props}
            className={buttonVariants({
                variant: 'ghost',
                className: isActive && 'bg-muted/90',
                size: 'sm',
            })}
        >
            {props.children}
        </Link>
    );
}

export default Navlink;
