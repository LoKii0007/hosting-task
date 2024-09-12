'use client'
import { createClient } from '@/prismicio'
import { useState, useEffect } from 'react'

export default function Accordion1() {
    const [isActive, setIsActive] = useState(1)
    const [faq, setFaq] = useState(null)

    useEffect(() => {
        const fetchFaq = async () => {
            const client = createClient()
            const faqData = await client.getSingle('faq')
            setFaq(faqData)
        }
        fetchFaq()
    }, [])

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }

    return (
        <>
            <div className="tf-flat-accordion2">

                { 
                  faq?.data?.faq1?.map((data, index)=>(
                    <div key={index} className={`flat-toggle2 ${index === 0 ? '':''}`}>
                    <h6  className={isActive === index+1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(index + 1)}>{data.question}</h6>
                    <div className="toggle-content" style={{ display: `${isActive === index+1 ? "block" : "none"}` }}>
                        <p>{data.answer}
                        </p>
                    </div>
                </div>
                  ))
                }
                {/* <div className="flat-toggle2 active">
                    <h6  className={isActive === 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(1)}>What are the NFTs?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6  className={isActive === 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(2)}>How do i get NFTs?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6  className={isActive === 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(3)}>How we can buy and invest NFT ?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div> */}
            </div>
        </>
    )
}
