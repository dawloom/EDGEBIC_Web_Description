import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components';

import { AppInfo } from '@/constants/app-info';

export type ContactFormEmailData = {
  recipient: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  productInterest: string;
  hearAboutUs: string;
  message?: string;
};

export const ContactFormEmail = ({
  firstName,
  lastName,
  email,
  phone,
  productInterest,
  hearAboutUs,
  message
}: ContactFormEmailData) => (
  <Html>
    <Head />
    <Preview>
      New Contact: {firstName} {lastName} - {productInterest}
    </Preview>
    <Body
      style={{
        margin: 'auto',
        backgroundColor: '#f6f9fc',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <Container style={{ margin: '40px auto', maxWidth: '600px' }}>
        {/* Header */}
        <Section
          style={{
            backgroundColor: '#2563eb',
            padding: '30px 40px',
            borderRadius: '8px 8px 0 0',
            textAlign: 'center' as const
          }}
        >
          <Heading
            style={{
              margin: 0,
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#ffffff'
            }}
          >
            New Contact Form Submission
          </Heading>
          <Text
            style={{
              margin: '10px 0 0 0',
              fontSize: '16px',
              color: '#bfdbfe'
            }}
          >
            Someone is interested in your products
          </Text>
        </Section>

        {/* Main Content */}
        <Section
          style={{
            backgroundColor: '#ffffff',
            padding: '30px 40px',
            borderRadius: '0 0 8px 8px',
            border: '1px solid #e6ebf1',
            borderTop: 'none'
          }}
        >
          {/* Contact Badge */}
          <Section
            style={{
              backgroundColor: '#f0f9ff',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center' as const,
              marginBottom: '24px'
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: '14px',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '1px',
                color: '#0369a1'
              }}
            >
              New Lead
            </Text>
            <Heading
              style={{
                margin: '8px 0 0 0',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1e293b'
              }}
            >
              {firstName} {lastName}
            </Heading>
          </Section>

          {/* Contact Details */}
          <Section style={{ marginBottom: '24px' }}>
            <Text
              style={{
                marginBottom: '16px',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '1px',
                color: '#64748b'
              }}
            >
              Contact Information
            </Text>

            {/* Email Row */}
            <Section
              style={{
                backgroundColor: '#f8fafc',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                marginBottom: '12px'
              }}
            >
              <Row>
                <Column style={{ width: '40px', verticalAlign: 'middle' }}>
                  <Text style={{ margin: 0, fontSize: '20px' }}>📧</Text>
                </Column>
                <Column style={{ verticalAlign: 'middle' }}>
                  <Text
                    style={{ margin: 0, fontSize: '12px', color: '#64748b' }}
                  >
                    Email Address
                  </Text>
                  <Link
                    href={`mailto:${email}`}
                    style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#2563eb',
                      textDecoration: 'none'
                    }}
                  >
                    {email}
                  </Link>
                </Column>
              </Row>
            </Section>

            {phone && (
              <Section
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '16px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  marginBottom: '12px'
                }}
              >
                <Row>
                  <Column style={{ width: '40px', verticalAlign: 'middle' }}>
                    <Text style={{ margin: 0, fontSize: '20px' }}>📱</Text>
                  </Column>
                  <Column style={{ verticalAlign: 'middle' }}>
                    <Text
                      style={{ margin: 0, fontSize: '12px', color: '#64748b' }}
                    >
                      Phone Number
                    </Text>
                    <Link
                      href={`tel:${phone}`}
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#1e293b',
                        textDecoration: 'none'
                      }}
                    >
                      {phone}
                    </Link>
                  </Column>
                </Row>
              </Section>
            )}
          </Section>

          <Section style={{ marginBottom: '24px' }}>
            <Text
              style={{
                marginBottom: '16px',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '1px',
                color: '#64748b'
              }}
            >
              Interest Details
            </Text>

            <Row>
              <Column style={{ paddingRight: '8px', width: '50%' }}>
                <Section
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <Text
                    style={{ margin: 0, fontSize: '12px', color: '#64748b' }}
                  >
                    Product Interest
                  </Text>
                  <Text
                    style={{
                      margin: '4px 0 0 0',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#1e293b'
                    }}
                  >
                    {productInterest}
                  </Text>
                </Section>
              </Column>
              <Column style={{ paddingLeft: '8px', width: '50%' }}>
                <Section
                  style={{
                    backgroundColor: '#f8fafc',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <Text
                    style={{ margin: 0, fontSize: '12px', color: '#64748b' }}
                  >
                    How They Found Us
                  </Text>
                  <Text
                    style={{
                      margin: '4px 0 0 0',
                      fontSize: '15px',
                      fontWeight: 600,
                      color: '#1e293b'
                    }}
                  >
                    {hearAboutUs}
                  </Text>
                </Section>
              </Column>
            </Row>
          </Section>

          {/* Message Section */}
          {message && (
            <Section style={{ marginBottom: '24px' }}>
              <Text
                style={{
                  marginBottom: '16px',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '1px',
                  color: '#64748b'
                }}
              >
                Message
              </Text>
              <Section
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #3b82f6'
                }}
              >
                <Text
                  style={{
                    margin: 0,
                    fontSize: '15px',
                    fontStyle: 'italic',
                    lineHeight: '24px',
                    color: '#374151',
                    whiteSpace: 'pre-wrap' as const
                  }}
                >
                  "{message}"
                </Text>
              </Section>
            </Section>
          )}
        </Section>

        {/* Footer */}
        <Section style={{ marginTop: '24px', textAlign: 'center' as const }}>
          <Text style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            This notification was sent from {AppInfo.APP_NAME}
          </Text>
          <Text
            style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#94a3b8' }}
          >
            © {new Date().getFullYear()} {AppInfo.APP_NAME}. All rights
            reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
