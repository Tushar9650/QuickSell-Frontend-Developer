import React, { useEffect } from 'react'
import './App.css';
// import Card from './components/Card/Card';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './DataAction/Action';
import Dashboard from './Components/Dashboard/Dashboard';
import Spinner from './Components/Spinner/Spinner';
import DisplayNavbar from './Components/DisplayNavbar/DisplayNavbar';
function App() {

  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])


  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <DisplayNavbar/>
      <hr style={{marginTop : "10px"}} />
      <Dashboard/>
    </div>
  ) : <Spinner/>

}

export default App;
