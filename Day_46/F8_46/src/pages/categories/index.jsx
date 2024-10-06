import { useState, useEffect } from "react";
import { FCommonTable } from "../../components";
import { CategoryDialog } from "../../components";
import { FButton } from "../../components";
export default function () {
    const [showDialog, setShowDialog] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState({});

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
        const response = await fetch(`https://px7ltm-8080.csb.app/categories`)
        setCategories(await response.json())
    }

    useEffect(() => {
        getCategories()
    }, [])
    const onUpdate = (category) => {
        setSelectedCategory(category)
        setShowDialog(true)
    }

    const onCloseDialog = () => {
        setShowDialog(false)
    }

    const onCreate = () => {
        setSelectedCategory({
            name: '',
            orderNum: '',
            
        })
        setShowDialog(true)
    }

    // const onInput = (e) => {
    //     // console.log(e.target.value);
    //     const newCategory = { ...category }
    //     newCategory[e.target.name] = e.target.value
    //     setSelectedCategory({...newCategory})
    // }

    return (
        <>
            <FCommonTable title={"Categories"} maxWidth={1000} columns={columns} rows={categories} onUpdate={onUpdate} onCreate={onCreate} />
            <CategoryDialog
                category={selectedCategory}
                show={showDialog}
                onClose={onCloseDialog}
                width={450}
                reload={getCategories}
                // onInput={onInput}
            />
        </>
    )
}