import { useState } from "react"
import { createContext } from "react"


export const ProductTypeContext = createContext()

export const TypeProvider = ({ children }) => {
    const [productsType, setProdyctsType] = useState('all')

    return (
        <ProductTypeContext.Provider
            value={{ productsType, setProdyctsType  }}
        >
            {children}
        </ProductTypeContext.Provider>
    )
}

