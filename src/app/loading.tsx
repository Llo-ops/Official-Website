export default async function loading() {
  await new Promise((resolve) => {
    setTimeout(() => {
        resolve("Intenional Delay");
      }, 2000)
    })
  return (
    <h1>Loading...</h1>
  )
}