import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Img,
} from "@react-email/components";
import * as React from "react";

interface KarhunoAdminEmailProps {
    to: string;
    ICP: string;
    moreDetails: string;
    company: string;
    name: string;
  }

export default function KarhunoAdminEmail({to,ICP,moreDetails,company,name}: KarhunoAdminEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src="https://karhuno-ai.vercel.app/_next/image?url=%2Fimages%2FlogoWtext.png&w=384&q=75"
              alt="Karhuno Logo"
            />
          </Section>

          <Text style={subtitle}>All the information from user, {name}</Text>

          <Hr style={divider} />

          <Text style={text}>I am looking for this ICP: {ICP}</Text>
          <Text style={text}>more details: {moreDetails}</Text>
          <Text style={text}>The company name is: {company}</Text>
          <Text style={text}>My name is: {name}</Text>
          <Text style={text}>my Email address is: {to}</Text>
        </Container>
      </Body>
    </Html>
  );
}
// Styles
const main = {
  backgroundColor: "#f3f4f6",
  padding: "40px 0",
  textAlign: "center" as const,
};

const container = {
  maxWidth: "600px",
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "8px",
  margin: "0 auto",
  textAlign: "center" as const,
};

const logoSection = {
  display: "flex",
  justifyContent: "center",
};

const subtitle = {
  fontSize: "20px",
  color: "#6A0DAD",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const divider = {
  margin: "20px auto",
  borderTop: "1px solid #e0e0e0",
  width: "100%",
};

const text = {
  fontSize: "14px",
  color: "#333",
  margin: "10px 0",
  textAlign: "center" as const,
};
