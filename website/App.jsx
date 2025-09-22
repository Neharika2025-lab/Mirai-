import Card from "./interface.jsx"
import img1 from "./assets/logo.jpg";
import img2 from "./assets/intern.jpg";
import img3 from "./assets/job.jpg";

function App() {
    return(
        <>
            <header>SkillBuilder</header>
        <div className="cards-container">
            <Card image={img1} title="Home" />
            <Card image={img2} title="Internships" />
            <Card image={img3} title="Jobs" />
        </div>
            <footer>
                <ul style={{ listStyle: "none"}}>
                    <li><a href="#">Skills In Progress</a></li>
                    <li><a href="#">Jobs Applied</a></li>
                    <li><a href="#">Time Spent</a></li>
                </ul>
            </footer>
        </>
        
        

    );
  
}

export default App
