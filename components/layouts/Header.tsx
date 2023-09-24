import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserMenu from './UserMenu';
import Link from 'next/link';
import Navlink from './Navlink';

function Header() {
    return (
        <header className='border-b sticky top-0 bg-white'>
            <div className='flex justify-between gap-4 mx-auto max-w-5xl p-4'>
                <div className='flex gap-2 items-center'>
                    <Image src='/logo.svg' width={40} height={40} alt='Logo' />
                    <div className='flex'>
                        <Navlink href='/dashboard'>Dashboard</Navlink>
                        <Navlink href='/plans'>Plans</Navlink>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Link href='/dashboard/calorie-intakes/intake'>
                        <Button className='flex gap-2' size='sm'>
                            Intake
                            <Plus className='h-4 w-4' />
                        </Button>
                    </Link>
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
