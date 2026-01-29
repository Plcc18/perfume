export type ProductFormData = {
  name: string
  brand: string
  description: string
  price: string
  originalPrice: string
  image: string
  category: "masculino" | "feminino" | "unissex"
  size: string
  concentration?: string
  olfactiveFamily?: string
  featured: boolean
  inStock: boolean
}

export const emptyForm: ProductFormData = {
  name: "",
  brand: "",
  description: "",
  price: "",
  originalPrice: "",
  image: "",
  category: "feminino",
  size: "100ml",
  concentration: "",
  olfactiveFamily: "",
  featured: false,
  inStock: true,
}

export interface SmartImageUploaderProps {
  value: string
  onChange: (newValue: string) => void
  className?: string
  maxSizeMB?: number
}