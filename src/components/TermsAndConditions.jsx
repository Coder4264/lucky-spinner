import React from 'react'

export default function TermsAndConditions() {
    const terms = [
        "All members are entitled to one (1) free spin daily, the free spin will not accumulate and will expire/ be forfeited the next day.",
        "There will only be 6 prizes per month throughout the Campaign.",
        "1,000 points will be automatically converted to one (1) additional spin. The total points displayed on the daily mission page will only be deducted after members used up their daily login spins.",
        "There will be no expiration nor max cap for the activity points earned.",
        "Physical prizes, if applicable, are expected to be received by winners via delivery between seven (7) to fourteen (14) working days.",
        "Prizes are subject to availability and photos are for illustration purposes only.",
        "Members who have not made a deposit or have a history risk record will be ineligible to participate in this promotion.",
        "BK8 reserves the absolute right to substitute the prize with any other item(s) of similar value at its discretion by giving a twenty-one (21) days prior notice to the winners through any method of communication that BK8 shall at its absolute discretion decide.",
        "Participating members must accept and comply with all the terms mentioned above as well as all relevant and rules and regulations stated on the BK8 website.",
        "BK8 may at its discretion disqualify/reject any Eligible Participant who does not comply with the Terms and Conditions stated herein and/or is found or suspected of tampering with the Campaign and/or its process or the operation of the Campaign. Tampering shall include fraudulent activities involving any act of deceit and/or deception and/or cheating with regards to the Campaign and/or the eligible channel.",
        "General BK8 Terms & Conditions apply."

    ]
  return (
    <div className='text-white mt-20 px-10 h-[100%] text-justify'>
        <div className='flex items-center justify-center gap-5'>
            <div className='h-px md:w-4/12 bg-white'></div>
            <h1 className='lg:text-2xl lg:w-4/12 w-12/12 text-center'>Terms and Conditions</h1>
            <div className='h-px md:w-4/12 bg-white'></div>    
        </div>

        <div className='container-terms mb-10'>
            <div>
                <h3><span className='text-md font-bold'>Event:</span> Lucky Wheel Spin</h3>
            </div>
            <div className='clain-container flex flex-col gap-3 mt-5 md:w-6/12 w-full'>
                <span className='text-md font-bold'>How To Claim:</span>
                <span className='text-md'><span className='font-bold'>1.</span> This promotion is available for MYR members.</span>
                <span className='text-md'><span className='font-bold'>2.</span> Prizes won in the Lucky Wheel Spin will be issued directly into members main wallet and is required to complete one (1) turnover before withdrawal.</span>
                <span className='text-md'><span className='font-bold'>3.</span> Members are required to verify their identity with their phone number or email and screenshot of the pop-up message for the Special Prize to Customer Service to claim the special prize.</span>
            </div>
        </div>


        <div className='terms-conditions md:w-6/12 w-full'>
            <h3 className='font-bold'>Terms and Conditions</h3>
            {terms.map((terms, index) => (
                <div key={index} className='mb-2'>
                    <span className=''><span className='font-bold'>{index + 1}. </span>{terms}</span>
                </div>
            ))}
            
        </div>
        <div className='h-px w-full bg-white mb-10 mt-10'></div>
    </div>
  )
}
