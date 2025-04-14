import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Button,
    Hr,
    Img,
  } from "@react-email/components";
  import * as React from "react";
  
  export default function KarhunoSignupEmail() {
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
  
            <Text style={subtitle}>Thanks For Signing UP</Text>
  
            <Hr style={divider} />
  
            <Text style={text}>
              Here&#39;s what will happen next:
            </Text>
  
            <Text style={listItem}>
              <strong>1.</strong> We&#39;ll <strong>review the signals</strong> you mentioned in the Form. If we need more information, we&#39;ll get in touch with you.
            </Text>
  
            <Text style={listItem}>
              <strong>2.</strong> We&#39;ll <strong>start monitoring</strong> the signals using our neural network.
            </Text>
  
            <Text style={listItem}>
              <strong>3.</strong> In <strong>5 business days, you&#39;ll get a report</strong> via email with details about events, companies, and contacts.
            </Text>
  
            <Text style={listItem}>
              <strong>4.</strong> Your sales team can contact them and <strong>close deals more easily.</strong>
            </Text>
  
            <Text style={text}>
              After that, <strong>we&#39;ll reach out to you to talk about next steps.</strong>
            </Text>
  
            <Section style={buttonContainer}>
              <Button
                href="https://karhuno.com"
                style={button}
              >
                Back to Karhuno
              </Button>
            </Section>
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
  
  const listItem = {
    fontSize: "14px",
    color: "#333",
    margin: "10px auto",
    textAlign: "left" as const,
    maxWidth: "500px",
  };
  
  const buttonContainer = {
    marginTop: "20px",
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#6A0DAD",
    color: "#fff",
    padding: "12px 24px",
    textDecoration: "none",
    borderRadius: "12px",
    fontWeight: "bold",
    display: "inline-block",
    textAlign: "center" as const,
  };