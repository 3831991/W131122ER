import Numbers from "./Numbers";

function Home() {
    return (
        <>
            <h2>ברוכים הבאים</h2>
        
            <Numbers min={15} max={50} />
            <Numbers min={30} max={80} />
            <Numbers min={100} max={120} />

            <Square width={400} height={300} bg="blue" />
            <Square width={600} height={200} bg="green" />
            <Square width={800} height={500} bg="yellow" />
        </>
    )
}

export default Home;