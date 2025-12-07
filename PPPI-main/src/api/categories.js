export async function fetchCategories() {
  const res = await fetch("/api/categories");
  if (!res.ok) throw new Error("Помилка при завантажені категорій");
  return res.json();
}