import Numbers from "./Numbers";

function Home() {
    return (
        <>
            <h2>ברוכים הבאים</h2>
        
            <Numbers min={15} max={50} />
            <Numbers min={30} max={80} />
            <Numbers min={100} max={120} />
        </>
    )
}

export default Home;