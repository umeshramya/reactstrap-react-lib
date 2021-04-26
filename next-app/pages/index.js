import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ButtomP from "../components/submitForm"
import Table from "../components/table"

export default function Home() {
  return (
<>
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