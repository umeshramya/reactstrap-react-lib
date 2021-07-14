import Forms from "../components/submitForm"
import Table from "../components/table"
import DateTime from "../components/dateTime"
import AdminPanel from "../components/Admin"

export default function Home() {
  return (
    <>

      <DateTime />
      <Forms />
      <AdminPanel />
      <Table />
    </>
  )
}


export async function getServerSideProps(ctx) {
  // Fetch data from external API

  console.log(ctx.query)
  // Pass data to the page via props
  return { props: {} }
}