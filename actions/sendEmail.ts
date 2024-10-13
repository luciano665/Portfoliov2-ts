"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/helperFunc";
import ContactEmail from "@/email/form-emai";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if(!validateString(senderEmail, 500)){
        return{
            error: "Invlid sender email"
        }
    }
    if(!validateString(message, 5000)){
        return{
            error: "Inavil message"
        }
    }

    let data;
    try{
        data = await resend.emails.send({
            from: 'Portfolio website <>',
            to: "lumr0067@gmail.com",
            subject: "Message from contact form",
            replyTo: senderEmail as string,
            react: React.createElement(ContactEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        });
    }catch (error: unknown){
        return{
            error: getErrorMessage(error)
        }   
    }
    return {
        data,
    }

};

