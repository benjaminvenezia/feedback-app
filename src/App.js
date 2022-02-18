import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
// import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

    // const [feedback, setFeedback] = useState(FeedbackData) inutile désormais, car le feedback est géré dans le contexte

    /**
     * Précedemment, les deux fonctions addDeedback et deleteFeedback se trouvaient ici. 
     */

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                                <>
                                    <FeedbackForm /* handleAdd={addFeedback} */ />
                                    <FeedbackStats /* feedback={feedback} */ />
                                    <FeedbackList 
                                        // feedback={feedback} On utilise le Contexte
                                        //handleDelete={deleteFeedback} aussi géré dans le contexte
                                    />
                                </>
                            }>
                        
                        </Route>
                        <Route path="/about" element={<AboutPage/>} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App