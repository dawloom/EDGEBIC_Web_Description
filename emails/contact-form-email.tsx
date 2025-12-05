import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

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
    <Preview>New Contact: {firstName} {lastName} - {productInterest}</Preview>
    <Tailwind>
      <Body className="m-auto bg-[#f6f9fc] font-sans">
        <Container className="mx-auto my-[40px] max-w-[600px]">
          {/* Header */}
          <Section className="rounded-t-lg bg-gradient-to-r from-[#1e40af] to-[#3b82f6] px-[40px] py-[30px] text-center">
            <Heading className="m-0 text-[28px] font-bold text-white">
              New Contact Form Submission
            </Heading>
            <Text className="m-0 mt-[10px] text-[16px] text-blue-100">
              Someone is interested in your products
            </Text>
          </Section>

          {/* Main Content */}
          <Section className="rounded-b-lg border border-solid border-[#e6ebf1] border-t-0 bg-white px-[40px] py-[30px]">
            {/* Contact Badge */}
            <Section className="mb-[24px] rounded-lg bg-[#f0f9ff] p-[20px] text-center">
              <Text className="m-0 text-[14px] font-semibold uppercase tracking-wide text-[#0369a1]">
                New Lead
              </Text>
              <Heading className="m-0 mt-[8px] text-[24px] font-bold text-[#1e293b]">
                {firstName} {lastName}
              </Heading>
            </Section>

            {/* Contact Details Grid */}
            <Section className="mb-[24px]">
              <Text className="mb-[16px] text-[12px] font-semibold uppercase tracking-wider text-[#64748b]">
                Contact Information
              </Text>

              {/* Email Row */}
              <Section className="mb-[12px] rounded-lg border border-solid border-[#e2e8f0] bg-[#f8fafc] p-[16px]">
                <Row>
                  <Column className="w-[40px] align-middle">
                    <Text className="m-0 text-[20px]">📧</Text>
                  </Column>
                  <Column className="align-middle">
                    <Text className="m-0 text-[12px] text-[#64748b]">Email Address</Text>
                    <Link href={`mailto:${email}`} className="text-[15px] font-medium text-[#2563eb] no-underline">
                      {email}
                    </Link>
                  </Column>
                </Row>
              </Section>

              {/* Phone Row */}
              {phone && (
                <Section className="mb-[12px] rounded-lg border border-solid border-[#e2e8f0] bg-[#f8fafc] p-[16px]">
                  <Row>
                    <Column className="w-[40px] align-middle">
                      <Text className="m-0 text-[20px]">📱</Text>
                    </Column>
                    <Column className="align-middle">
                      <Text className="m-0 text-[12px] text-[#64748b]">Phone Number</Text>
                      <Link href={`tel:${phone}`} className="text-[15px] font-medium text-[#1e293b] no-underline">
                        {phone}
                      </Link>
                    </Column>
                  </Row>
                </Section>
              )}
            </Section>

            {/* Interest Details */}
            <Section className="mb-[24px]">
              <Text className="mb-[16px] text-[12px] font-semibold uppercase tracking-wider text-[#64748b]">
                Interest Details
              </Text>

              <Row>
                <Column className="pr-[8px]">
                  <Section className="rounded-lg border border-solid border-[#e2e8f0] bg-[#f8fafc] p-[16px]">
                    <Text className="m-0 text-[12px] text-[#64748b]">Product Interest</Text>
                    <Text className="m-0 mt-[4px] text-[15px] font-semibold text-[#1e293b]">
                      {productInterest}
                    </Text>
                  </Section>
                </Column>
                <Column className="pl-[8px]">
                  <Section className="rounded-lg border border-solid border-[#e2e8f0] bg-[#f8fafc] p-[16px]">
                    <Text className="m-0 text-[12px] text-[#64748b]">How They Found Us</Text>
                    <Text className="m-0 mt-[4px] text-[15px] font-semibold text-[#1e293b]">
                      {hearAboutUs}
                    </Text>
                  </Section>
                </Column>
              </Row>
            </Section>

            {/* Message Section */}
            {message && (
              <Section className="mb-[24px]">
                <Text className="mb-[16px] text-[12px] font-semibold uppercase tracking-wider text-[#64748b]">
                  Message
                </Text>
                <Section className="rounded-lg border-l-4 border-solid border-[#3b82f6] bg-[#f8fafc] p-[20px]">
                  <Text className="m-0 whitespace-pre-wrap text-[15px] italic leading-[24px] text-[#374151]">
                    "{message}"
                  </Text>
                </Section>
              </Section>
            )}

            {/* CTA Button */}
            <Section className="text-center">
              <Link
                href={`mailto:${email}?subject=RE: Your inquiry about ${productInterest}`}
                className="inline-block rounded-lg bg-[#2563eb] px-[32px] py-[14px] text-[15px] font-semibold text-white no-underline"
              >
                Reply to {firstName}
              </Link>
            </Section>
          </Section>

          {/* Footer */}
          <Section className="mt-[24px] text-center">
            <Text className="m-0 text-[13px] text-[#64748b]">
              This notification was sent from {AppInfo.APP_NAME}
            </Text>
            <Text className="m-0 mt-[4px] text-[12px] text-[#94a3b8]">
              © {new Date().getFullYear()} {AppInfo.APP_NAME}. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
