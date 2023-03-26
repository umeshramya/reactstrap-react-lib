
import AdminPanel from "../components/Admin"

export default function Home() {
  return (
    <>
      {/* <AdminPanel /> */}

      <AdminPanel/>
    </>
  )
}


export async function getServerSideProps(ctx) {
  // Fetch data from external API

  console.log(ctx.query)
  // Pass data to the page via props
  return { props: {} }
}