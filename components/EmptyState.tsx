import { Database } from 'lucide-react';
import React from 'react';

function EmptyState() {
    return (
        <div className='p-8 mt-4 grid place-items-center gap-4 border rounded-lg'>
            <Database className='h-10 w-10' />
            No data found
        </div>
    );
}

export default EmptyState;
