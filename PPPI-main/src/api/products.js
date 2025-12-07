export async function fetchProducts() {
  const res = await fetch("/api/products"); 
  if (!res.ok) throw new Error("Помилка при завантажені страв");
  return res.json();
}
