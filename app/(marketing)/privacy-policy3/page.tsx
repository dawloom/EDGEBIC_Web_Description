import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicy3Page() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-700 mb-4">
                            User Solutions, Inc.
                        </p>
                        <p className="text-lg text-gray-600">
                            Our website address is: <Link href="/" className="text-blue-600 hover:text-blue-800">https://www.usersolutions.com</Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-6 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">

                        {/* Who we are */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Who We Are</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700">
                                    Our website address is: <Link href="/" className="text-blue-600 hover:text-blue-800">https://www.usersolutions.com</Link>
                                </p>
                            </CardContent>
                        </Card>

                        {/* Comments */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Comments</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700 mb-4">
                                    When visitors leave comments on the site we collect the data shown in the comments form, and also
                                    the visitor's IP address and browser user agent string to help spam detection.
                                </p>
                                <p className="text-gray-700">
                                    An anonymized string created from your email address (also called a hash) may be provided to the
                                    Gravatar service to see if you are using it. The Gravatar service privacy policy is available here:
                                    <a href="https://automattic.com/privacy/" className="text-blue-600 hover:text-blue-800 ml-1" target="_blank" rel="noopener noreferrer">
                                        https://automattic.com/privacy/
                                    </a>. After approval of your comment, your profile picture is visible to the public in the context
                                    of your comment.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Media */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Media</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700">
                                    If you upload images to the website, you should avoid uploading images with embedded location data
                                    (EXIF GPS) included. Visitors to the website can download and extract any location data from images
                                    on the website.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Cookies */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Cookies</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700 mb-4">
                                    If you leave a comment on our site you may opt-in to saving your name, email address and website in
                                    cookies. These are for your convenience so that you do not have to fill in your details again when
                                    you leave another comment. These cookies will last for one year.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    If you visit our login page, we will set a temporary cookie to determine if your browser accepts
                                    cookies. This cookie contains no personal data and is discarded when you close your browser.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    When you log in, we will also set up several cookies to save your login information and your screen
                                    display choices. Login cookies last for two days, and screen options cookies last for a year. If you
                                    select "Remember Me", your login will persist for two weeks. If you log out of your account, the
                                    login cookies will be removed.
                                </p>
                                <p className="text-gray-700">
                                    If you edit or publish an article, an additional cookie will be saved in your browser. This cookie
                                    includes no personal data and simply indicates the post ID of the article you just edited. It expires
                                    after 1 day.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Embedded content */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Embedded Content from Other Websites</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700 mb-4">
                                    Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded
                                    content from other websites behaves in the exact same way as if the visitor has visited the other
                                    website.
                                </p>
                                <p className="text-gray-700">
                                    These websites may collect data about you, use cookies, embed additional third-party tracking, and
                                    monitor your interaction with that embedded content, including tracking your interaction with the
                                    embedded content if you have an account and are logged in to that website.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Who we share data with */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Who We Share Your Data With</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700">
                                    If you request a password reset, your IP address will be included in the reset email.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Data retention */}
                        <Card>
                            <CardHeader>
                                <CardTitle>How Long We Retain Your Data</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700 mb-4">
                                    If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can
                                    recognize and approve any follow-up comments automatically instead of holding them in a moderation
                                    queue.
                                </p>
                                <p className="text-gray-700">
                                    For users that register on our website (if any), we also store the personal information they provide
                                    in their user profile. All users can see, edit, or delete their personal information at any time
                                    (except they cannot change their username). Website administrators can also see and edit that
                                    information.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Your rights */}
                        <Card>
                            <CardHeader>
                                <CardTitle>What Rights You Have Over Your Data</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700">
                                    If you have an account on this site, or have left comments, you can request to receive an exported
                                    file of the personal data we hold about you, including any data you have provided to us. You can
                                    also request that we erase any personal data we hold about you. This does not include any data we
                                    are obliged to keep for administrative, legal, or security purposes.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Where data is sent */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Where Your Data Is Sent</CardTitle>
                            </CardHeader>
                            <CardContent className="prose max-w-none">
                                <p className="text-gray-700">
                                    Visitor comments may be checked through an automated spam detection service.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-50 pt-6 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-4">
                                    If you have any questions about this Privacy Policy, please contact us:
                                </p>
                                <div className="space-y-2">
                                    <p className="text-gray-700">
                                        <strong>Email:</strong>{" "}
                                        <Link href="mailto:us@usersolutions.com" className="text-blue-600 hover:text-blue-800">
                                            us@usersolutions.com
                                        </Link>
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>Phone:</strong>{" "}
                                        <Link href="tel:248.486.6365" className="text-blue-600 hover:text-blue-800">
                                            248.486.6365
                                        </Link>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Awards Section */}
            <section className="bg-gray-50 pt-6 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">
                            Celebrating 25 Years of Award Winning Software!
                        </h2>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-gray-600 mb-4">
                                Trusted by manufacturers worldwide for over 25 years
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 items-center opacity-70">
                                <div className="text-sm font-semibold text-gray-500">Industry Awards</div>
                                <div className="text-sm font-semibold text-gray-500">Excellence Recognition</div>
                                <div className="text-sm font-semibold text-gray-500">Customer Choice</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
