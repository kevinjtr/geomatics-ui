import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
export default function ScrollToTop() {
    const routePath = useLocation();
    const ScrollToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        ScrollToTop()
    }, [routePath]);
 
    return null;
}