export const sortOptions = [
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "white", label: "White", checked: false },
            { value: "beige", label: "Beige", checked: false },
            { value: "blue", label: "Blue", checked: false },
            { value: "brown", label: "Brown", checked: false },
            { value: "green", label: "Green", checked: false },
            { value: "purple", label: "Purple", checked: false },
        ],
    },
    {
        id: "category",
        name: "Category",
        options: [
            { value: "new-arrivals", label: "New Arrivals", checked: false },
            { value: "sale", label: "Sale", checked: false },
            { value: "travel", label: "Travel", checked: false },
            { value: "organization", label: "Organization", checked: false },
            { value: "accessories", label: "Accessories", checked: false },
        ],
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "2l", label: "2L", checked: false },
            { value: "6l", label: "6L", checked: false },
            { value: "12l", label: "12L", checked: false },
            { value: "18l", label: "18L", checked: false },
            { value: "20l", label: "20L", checked: false },
            { value: "40l", label: "40L", checked: false },
        ],
    },
];

export const singleFilter = [

    {
        id: "prices",
        name: "Price",
        options: [
            { value: "99 to 199", label: "99 to 199", checked: false },
            { value: "200 to 399", label: "200 to 399", checked: false },
            { value: "400 to 599", label: "400 to 599", checked: false },
            { value: "600 to 1000", label: "600 to 1000", checked: false },
            { value: "1000 to above", label: "1000 to above", checked: false },
        ]
    },
    {
        id: "discount",
        name: "Discount",
        options: [
            { value: "10", label: "10% and above", checked: false },
            { value: "20", label: "20% and above", checked: false },
            { value: "30", label: "30% and above", checked: false },
            { value: "50", label: "50% and above", checked: false },
            { value: "75", label: "75% and above", checked: false },
        ]
    },
    {
        id: "stock",
        name: "stock",
        options: [
            { value: "in_stock", label: "In_Stock", checked: false },
            { value: "out_of_stock", label: "Out_of_Stock", checked: false },
        ]
    }
]
