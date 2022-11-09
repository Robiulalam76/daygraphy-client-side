import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - DayGraphy`;
    }, [title])
};

export default useTitle;