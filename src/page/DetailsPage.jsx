import React from 'react'
import './DetailsPage.css'


const DetailsPage = () => {
  return (
    <>
        <main className='DetailsMain'>
            <div className='DetailsMainLeft'>
                <div className='DetailsMainLeftD1'>
                    <h1 className='DetailsMainLeftD1H1'>Transfer Funds</h1>
                </div>
                <div className='DetailsMainLeftD2'>
                    <h1 className='DetailsMainLeftD2H1'>Bank</h1>
                    <select name="Bank" id="" className='DetailsMainLeftD2S'>
                        <option value="Bank">Access Bank</option>
                        <option value="Bank">Fidelity Bank</option>
                        <option value="Bank">Opay Bank</option>
                        <option value="Bank">Palm Pay Bank</option>
                        <option value="Bank">Zenith Bank</option>
                    </select>
                </div>
                <div className='DetailsMainLeftD3'>
                    <h1 className='DetailsMainLeftD3H1'>Recipient Full Name</h1>
                    <input type="text" placeholder=' E.g. Ifeanacho Francis' className='DetailsMainLeftD3Input'/>
                </div>
                <div className='DetailsMainLeftD4'>
                    <h1 className='DetailsMainLeftD4H1'>Recipient Account Number</h1>
                    <input type="text" placeholder=' E.g. 1469629621' className='DetailsMainLeftD4Input'/>
                </div>
                <div className='DetailsMainLeftD5'>
                    <h1 className='DetailsMainLeftD5H1'>Amount</h1>
                    <input type="text" placeholder=' N 0.00' className='DetailsMainLeftD5Input'/>
                </div>
                <div className='DetailsMainLeftD6'>
                    <h1 className='DetailsMainLeftD6H1'>Memo (Optional)</h1>
                    <input type="text" placeholder=' Rent, dinner, etc.' className='DetailsMainLeftD6Input'/>
                </div>
                <div className='DetailsMainLeftD7'>
                    <button className='DetailsMainLeftD7Btn'>Send Transfer</button>
                </div>
            </div>
            <div className='DetailsMainRight'>
                <div className='DetailsMainRightD1'>
                    <h1 className='DetailsMainRightD1H1'>Total Available Balance</h1>
                    <h2 className='DetailsMainRightD1H2'>N12,450.80</h2>
                    <h3 className='DetailsMainRightD1H3'>Across 2 accounts</h3>
                </div>
                <div className='DetailsMainRightD2'>
                    <div className='DetailsMainRightD2T'>
                        <h1 className='DetailsMainRightD2TH1'>Transaction History</h1>
                    </div>
                    <div className='DetailsMainRightD2C'>
                        <h1 className='DetailsMainRightD2CH1'>Debit</h1>
                        <h2 className='DetailsMainRightD2CH2'>-N3,200.00</h2>
                    </div>
                    <div className='DetailsMainRightD2D'>
                        <h1 className='DetailsMainRightD2DH1'>Credit</h1>
                        <h2 className='DetailsMainRightD2DH2'>+N9,250.80</h2>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default DetailsPage
