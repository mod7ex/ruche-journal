export default function TermsOfService() {
    return (
        <div className="max-w-4xl mx-auto mb-8">
            <article className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <h1 className="text-3xl font-bold mb-4">Termes de Service</h1>
                <p className="mb-4">
                    En utilisant le site <strong>La ruche journal</strong>, vous acceptez les conditions suivantes :
                </p>

                <ul className="list-disc ml-6 space-y-2 mb-4">
                    <li>Le contenu du site est fourni uniquement à titre informatif.</li>
                    <li>Vous vous engagez à utiliser le site de manière respectueuse et légale.</li>
                    <li>Nous pouvons modifier ces conditions à tout moment et sans préavis.</li>
                    <li>Le site peut contenir des liens vers des sources externes dont nous ne sommes pas responsables.</li>
                    <li>
                        Les données collectées servent uniquement à améliorer nos services et ne sont pas partagées sans
                        consentement.
                    </li>
                </ul>

                <p>
                    En continuant à utiliser ce site, vous acceptez pleinement ces Termes de Service.
                </p>
            </article>
        </div>
    );
}
