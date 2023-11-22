import { PuffLoader } from "react-spinners";
function Loader()
{
    return (
        <div style={{height:"250px",width:'250px', display:'flex',alignItems:'center',justifyContent:'center'}}>
            <PuffLoader color="#F20000"/>
        </div>
    )
}
export default Loader