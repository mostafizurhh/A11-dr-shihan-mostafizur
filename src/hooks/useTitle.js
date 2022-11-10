const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `Dr. Shihan Mostafizur # ${title}`
    }, [title])
}
export default useTitle;