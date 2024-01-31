import { useSetRecoilState, useRecoilValue } from 'recoil' 
import { otpSentAtom } from '../store/atoms/otp'
import { useRef } from 'react'

export const LoginCard = () => {
    const otpSent = useRecoilValue(otpSentAtom)

    return (
        <div className='main'>
            <div className='head'>Login via OTP</div>
            {!otpSent ? <NumberCard/> : <OtpCard/>}
        </div>
    )
}

const NumberCard = () => {
    const SetOtpSent = useSetRecoilState(otpSentAtom)
    return <div>
        <div><input type='tel' placeholder='Enter your mobile number' maxLength={10}/></div>
        <div><button onClick={() => {
            SetOtpSent(() => true)
        }}>Send OTP</button></div>
    </div>
}

export const OtpCard = () => {
    const inputRefs = [useRef(), useRef(), useRef(), useRef()]
    return <div>
        <div className='digits'>
            {
                inputRefs.map((inputRef, index) => (
                    <input
                    key={index}
                    ref={inputRef}
                    type="text"
                    maxLength={1}
                    onChange={(e) => {
                        if(e.target.value.length == 1 && index < inputRefs.length-1)
                            inputRefs[index + 1].current.focus()
                        else if(e.target.value.length == 0 && index > 0)
                            inputRefs[index - 1].current.focus()
                    }}
                    />
                ))
            }
        </div>
        <div>
            <button>Login</button>
        </div>
    </div>
}