
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from '../../Authentication/component/LoginUI';
import SignUp from '../../Authentication/component/SignUp';
import AddFlight from '../../Flight/component/Flight/AddFlight';
import DeleteFlight from '../../Flight/component/Flight/DeleteFlight';
import ViewAllFlight from '../../Flight/component/Flight/viewAllFlight';
import ViewScheduledFlight from '../../Flight/component/ScheduledFlight/ViewAllScheduledFlight';
// import Front from './Front';

import Header from './Header';
import HomePage from './HomePage';
import ModifyFlight from '../../Flight/component/Flight/modifyflight';

function Home(){
    return(
       
             
                
            <Router>
            <Header />
                 
                    <Routes>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/login" element={<SignIn/>}/>
                        <Route path="/flight/all" element={< ViewAllFlight />} />
                        <Route path='/' element={<HomePage/>}/>
                        {/* <Route path="/Front" element={<Front/>}></Route> */}
                        <Route path="/flight/delete/:flightNumber" element={<DeleteFlight/>} />
                        <Route path="/flight/add" element={<AddFlight/>} />
                        <Route path="/viewscfflight" element={<ViewScheduledFlight />} />
                        <Route path="/modifyFlight" element={<ModifyFlight />} />
                        {/* <Route path="/student/add" element={<AddStudent />} />
                        <Route path="/student/delete/:studentId" element={<DeleteStudent />} />
                        <Route path="/student/update/:studentId" element={<UpdateStudent />} /> */}
                    </Routes>
                    </Router>

    )
}
export default Home;