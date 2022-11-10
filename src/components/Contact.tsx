import * as React from 'react'

export interface ContactProps {}

export function Contact(props: ContactProps) {
    return (
        <section id="contact" className="w-full bg-white">
            <div className="container m-auto py-12 pb-16">
                <div className="contact__title text-center mb-6">
                    <h3 className="text-[42px] font-bold text-[#393E46]">Contact</h3>
                    <p className="text-sm text-gray-500">Get in Touch</p>
                </div>
            </div>
        </section>
    )
}
