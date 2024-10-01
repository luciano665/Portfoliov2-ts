import React from "react";

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";

type ContactEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactEmail({
  message,
  senderEmail,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message form portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You recive the following email from contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
