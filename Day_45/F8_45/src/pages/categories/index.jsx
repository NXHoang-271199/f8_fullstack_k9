import { useState, useEffect } from "react";
import { FCommonTable } from "../../components";
import { CategoryDialog } from "../../components";

export default function () {
    const [showDialog, setShowDialog] = useState(false)
    const [categories, setCategories] = useState([])
    const columns = [
        {
            text: "ID",
            name: "id"
        },
        {
            text: "Name",
            name: "name"
        },
        {
            text: "Order Number",
            name: "orderNum"
        },
        {
            text: "",
            name: "action"
        }
    ]
    
    const getCategories = async () => { 
        const response = await fetch(`https://qzztw5-8080.csb.app/categories`)
        setCategories(await response.json())
    }

    useEffect(() => {
        getCategories()
    }, [])
    const onUpdate = (product)=> {
        setShowDialog(true)
    }

    const onCloseDialog = () => { 
        setShowDialog(false)
    }
    return (
        <>
            <FCommonTable title={"Categories"} maxWidth={1000} columns={columns} rows={categories} onUpdate={onUpdate}/>
            <CategoryDialog show={showDialog} onClose={onCloseDialog} width={450} reload={getCategories}/>
        </> 
    )
}