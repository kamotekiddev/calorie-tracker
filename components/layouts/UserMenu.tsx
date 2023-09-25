'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '../ui/separator';
import Navlink from './Navlink';

const getUserInitial = (name: string) => {
    if (!name) return;

    const splittedUserName = name.split(' ');
    const userInitials = splittedUserName.map((splittedName) =>
        splittedName.charAt(0),
    );

    return userInitials.slice(0, 2);
};

function UserMenu() {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    const userInitial = getUserInitial(session?.user?.name!);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button size='icon' variant='outline'>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent className='w-[350px]'>
                <div className='space-y-4'>
                    <div className='flex gap-4'>
                        <Avatar>
                            <AvatarImage src={session?.user?.image!} />
                            <AvatarFallback>{userInitial}</AvatarFallback>
                        </Avatar>
                        <div className='flex-1 overflow-hidden'>
                            <h1 className='font-semibold leading-none truncate'>
                                {session?.user?.name}
                            </h1>
                            <p className='text-sm text-slate-500 truncate'>
                                {session?.user?.email}
                            </p>
                        </div>
                    </div>
                    <Separator />
                    <div className='grid' onClick={() => setOpen(false)}>
                        <Navlink href='/dashboard'>Dashboard</Navlink>
                        <Navlink href='/plans'>Plans</Navlink>
                    </div>
                    <Separator />
                    <Button
                        size='sm'
                        className='w-full'
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default UserMenu;
