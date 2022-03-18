import { toast } from 'react-toastify';

export const notify = (status , loc) => {
    if(status === "error") {
        toast.error(`No result for ${loc}`)
    }
}
