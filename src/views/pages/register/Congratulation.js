
import congrates from '../../../assets/svg/congrates.svg';

/**
 * 
 * @returns 
 */
function Congratulation() {
    return (
        <div className='congrates-wrap'>
            <img src={congrates} alt="google" width={123} height={110} />
            <h3 className='welcome-text'>Congratulations!</h3>
            <p className='description'>Your request is successfully submitted!! <br></br>
                our team will contact you soon.</p>
            {/* <div className='row-panel action-btn'>
                <a href='#' className='done-btn'>Done</a>
            </div> */}
        </div>
    )
}

export default Congratulation;