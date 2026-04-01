'use client'

import "./Footer.css"
import { useState } from "react"
import { AMEX, Applepay, DownArrow, GPay, Instagram, Linkedin, MasterCard, Pay, Paypal, USAFLAG } from "@/assets/Icons"

const Footer = () => {
    const [openSection, setOpenSection] = useState<string | null>(null)

    const toggle = (section: string) => {
        setOpenSection(prev => (prev === section ? null : section))
    }

    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="footer_section_wide">
                    <p className="footer_heading">Be the first to know</p>
                    <p className="footer_text">Sign up for updates from mettā muse.</p>

                    <div className="footer_input_group">
                        <input type="text" placeholder="Enter your email" />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>

                <div className="footer_section">
                    <div className="footer_subsection">
                        <p className="footer_heading">CONTACT US</p>
                        <div className="contact_block">
                            <p className="footer_text">+44 221 133 5360</p>
                            <span className="contact_dot"></span>
                            <p className="footer_text">customercare@mettamuse.com</p>
                        </div>
                    </div>

                    <div className="footer_subsection">
                        <p className="footer_heading">Currency</p>

                        <div className="footer_currency">
                            <USAFLAG className="currency_flag" />
                            <span className="currency_empty_span"></span>
                            <span className="currency_text_span">USD</span>
                        </div>

                        <p className="footer_note">
                            Transactions will be completed in Euros and a currency reference is available on hover.
                        </p>
                    </div>
                </div>
            </div>

            <hr />

            <div className="footer_bottom">
                <div className="footer_section">
                    <p
                        className="footer_heading footer_toggle"
                        onClick={() => toggle("meta")}
                    >
                        mettā muse
                        <DownArrow className="footer_arrow" />
                    </p>

                    <div className={`footer_dropdown ${openSection === "meta" ? "open" : ""}`}>
                        <p className="footer_text">About Us</p>
                        <p className="footer_text">Stories</p>
                        <p className="footer_text">Artisans</p>
                        <p className="footer_text">Boutiques</p>
                        <p className="footer_text">Contact Us</p>
                        <p className="footer_text">EU Compliances Docs</p>
                    </div>
                </div>

                <hr className="dropdown_divider" />

                <div className="footer_section">
                    <p
                        className="footer_heading footer_toggle"
                        onClick={() => toggle("quick")}
                    >
                        Quick Links
                        <DownArrow className="footer_arrow" />
                    </p>

                    <div className={`footer_dropdown ${openSection === "quick" ? "open" : ""}`}>
                        <p className="footer_text">Orders & Shipping</p>
                        <p className="footer_text">Join/Login as a Seller</p>
                        <p className="footer_text">Payment & Pricing</p>
                        <p className="footer_text">Return & Refunds</p>
                        <p className="footer_text">FAQs</p>
                        <p className="footer_text">Privacy Policy</p>
                        <p className="footer_text">Terms & Conditions</p>
                    </div>
                </div>

                <hr className="dropdown_divider" />

                <div className="footer_section">
                    <div className="footer_block">
                        <p
                            className="footer_heading footer_toggle"
                            onClick={() => toggle("social")}
                        >
                            FOLLOW US
                            <DownArrow className="footer_arrow" />
                        </p>
                        <div className={`footer_dropdown ${openSection === "social" ? "open" : ""}`}>
                            <div className="footer_socials">
                                <Instagram />
                                <Linkedin />
                            </div>
                        </div>
                    </div>

                    <hr className="dropdown_divider" />

                    <div className="footer_block">
                        <p className="footer_heading">mettā muse Accepts</p>
                        <div className="footer_pay">
                            <GPay />
                            <MasterCard />
                            <Paypal />
                            <AMEX />
                            <Applepay />
                            <Pay />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                Copyright © 2023 mettamuse. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer