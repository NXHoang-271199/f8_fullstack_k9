import { useState } from "react";
import { FCommonTable } from "../../components";
import {ProductDialog} from "../../components";

export default function () {
    const [showDialog, setShowDialog] = useState(false)
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
            text: "Price",
            name: "price"
        },
        {
            text: "Category",
            name: "categoryID"  
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
    const products = [
        {
            id: 1,
            name: "iPhone 13",
            price: 1000,
            categoryID: 1,
            orderNum: 1
        }
    ]
    const onUpdate = (product)=> {
        setShowDialog(true)
    }

    const onCloseDialog = () => { 
        setShowDialog(false)
    }
    return (
        <>
            <FCommonTable title={"Products"} maxWidth={1000} columns={columns} rows={products} onUpdate={onUpdate}/>
            <ProductDialog show={showDialog} onClose={onCloseDialog} width={450}/>
        </> 
    )
}