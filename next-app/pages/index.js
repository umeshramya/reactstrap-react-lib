import ButtomP from "../components/submitForm"
import Table from "../components/table"
import DateTime from "../components/dateTime" 

export default function Home() {
  return (
<>
    
    <DateTime/>
    <ButtomP/>
    <Table />
</>
  )
}


export async function getServerSideProps(ctx) {
  // Fetch data from external API
 
  console.log(ctx.query)
  // Pass data to the page via props
  return { props: {  } }
}