import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Esta es la página de contacto',
 keywords: ['Contact Page', 'Jhon']
};

export default function ContactPage(){
    return (
        <>
          <span className="text-7xl"> Contactanos</span>
        </>
    )
}