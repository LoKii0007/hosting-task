'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/prismicio'

export default function Accordion2() {
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
                    faq?.data?.faq2.length > 0 ? (
                        faq?.data?.faq2?.map((data, index) => (
                            <div key={index} className="flat-toggle2">
                                <h6 className={isActive === index + 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(index + 1)}>{data.question}</h6>
                                <div className="toggle-content" style={{ display: `${isActive === index + 1 ? "block" : "none"}` }}>
                                    <p>{data.answer}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>loading FAQ</p>
                    )
                }

                {/* <div className="flat-toggle2">
                    <h6 className={isActive === 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(1)}>Where we can buy and sell NFts ?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6 className={isActive === 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(2)}>Who are the team behind the project?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6 className={isActive === 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(3)}>What is your contract address ?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p>Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.
                        </p>
                    </div>
                </div> */}
            </div>
        </>
    )
}
