import { useState, useEffect } from "react";
import { FCommonTable } from "../../components";
import {ProductDialog} from "../../components";

export default function () {
    const [showDialog, setShowDialog] = useState(false)
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState({})
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
            name: "categoryId"  
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

    const getProducts = async () => {
        const response = await fetch(`https://px7ltm-8080.csb.app/products`)
        setProducts(await response.json())
    }

    useEffect(() => {
        getProducts()
    }, [])
    const onUpdate = (product) => {
        setSelectedProduct(product)
        setShowDialog(true)
    }

    const onCreate = () => {
        setSelectedProduct({
            name: '',
            price: '',
            categoryId: '',
            orderNum: '',
        })
        setShowDialog(true)
    }
    const onCloseDialog = () => { 
        setShowDialog(false)
    }
    return (
        <>
            <FCommonTable title={"Products"} maxWidth={1000} columns={columns} rows={products} onUpdate={onUpdate} onCreate={onCreate}/>
            <ProductDialog
                product={selectedProduct}
                show={showDialog}
                onClose={onCloseDialog}
                width={450}
                reload={getProducts}
            />
                
        </> 
    )
}