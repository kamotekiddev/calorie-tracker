'use client';

import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@/components/ui/popover';

const getUserInitial = (name: string) => {
    if (!name) return;

    const splittedUserName = name.split(' ');
    const userInitials = splittedUserName.map((splittedName) =>
        splittedName.charAt(0),
    );

    return userInitials.slice(0, 2);
};

function UserMenu() {
    const { data: session } = useSession();

    const userInitial = getUserInitial(session?.user?.name!);

    return (
        <Popover>
            <PopoverTrigger>
                <Avatar>
                    <AvatarImage src={session?.user?.image!} />
                    <AvatarFallback>{userInitial}</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent className='-translate-x-4'>
                <div>
                    <h1 className='font-semibold leading-none truncate'>
                        {session?.user?.name}
                    </h1>
                    <p className='text-sm text-slate-500 truncate'>
                        {session?.user?.email}
                    </p>
                </div>
                <Button
                    onClick={() => signOut()}
                    size='sm'
                    className='w-full mt-4'
                >
                    Sign Out
                </Button>
            </PopoverContent>
        </Popover>
    );
}

export default UserMenu;
