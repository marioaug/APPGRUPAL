export async function GET() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();

  return Response.json(data);
}