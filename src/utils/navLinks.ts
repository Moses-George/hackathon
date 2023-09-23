interface Nav {
    id: string;
    name: string;
    path: string;
}


export const navLinks: Nav[] = [
    {
        id: "n1",
        name: "Timeline",
        path: "/timeline"
    },
        {
        id: "n2",
        name: "Overview",
        path: "/overview"
    },
        {
        id: "n3",
        name: "FAQs",
        path: "/faqs"
    },
        {
        id: "n4",
        name: "Contact",
        path: "/contact"
    }
]