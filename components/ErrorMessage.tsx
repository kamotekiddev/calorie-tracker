import { XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type ErrorMessageProps = {
    error?: string;
};

function ErrorMessage({
    error = 'Please try again later.',
}: ErrorMessageProps) {
    return (
        <Alert variant='destructive'>
            <XCircle className='h-5 w-5' />
            <AlertTitle>Error Occured</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
    );
}

export default ErrorMessage;
