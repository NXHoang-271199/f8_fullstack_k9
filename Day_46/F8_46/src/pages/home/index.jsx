import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate();
    
    return (
        
        <>
            <Button onClick={() => navigate('/products')}>Products</Button>
            <Button onClick={() => navigate('/categories')}>Categories</Button>
        </>
    )
}