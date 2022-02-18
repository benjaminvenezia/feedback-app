//import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
//npm i framer-motion@4.1.17
import {motion, AnimatePresence, MotionConfig} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'

function FeedbackList(/*{ feedback, handleDelete }*/) {
    //Utilisation du Contexte
    const { feedback, isLoading } = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No FeedBack yet</p>
    }

    return isLoading ? <Spinner /> : ( <div className="feedback-list">
    <AnimatePresence>
    {feedback.map((item) => (
        <motion.div //animation 
           key={item.id}
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           exit={{opacity: 0}}
        >
           <FeedbackItem 
               key={item.id} 
               item={item} 
               // handleDelete={handleDelete}
           />
        </motion.div>
    ))}
    </AnimatePresence>
</div>)

      
    
  
}

//Plus utilisé, car on utilise le Contexte à la place des props pour feedback
// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default FeedbackList