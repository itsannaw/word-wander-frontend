import { format } from "date-fns";

export const formatCreatedAt = (data: string) => {
    const createdAtDate = new Date(data);
    return format(createdAtDate, "MMMM d, yyyy h:mm a");
};
