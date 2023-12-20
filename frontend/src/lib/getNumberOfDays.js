export function getNumberOfDays(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diff = date.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (days === 1) {
        return "Tomorrow";
    } else if (days === 0) {
        return "Today";
    }
    else {
        return `${days} days left`;
    }
}