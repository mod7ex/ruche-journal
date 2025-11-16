export default function () {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
            <article className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8 sm:px-10 sm:py-10">
                    <header className="mb-6">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Politique de Confidentialité</h1>
                        <p className="mt-1 text-sm text-gray-500">Groupe Scolaire La Ruche — <span id="last-updated">Dernière mise à jour : 01-01-2025</span></p>
                    </header>

                    <section className="prose prose-sm max-w-none text-gray-700">
                        <p>
                            Le Groupe Scolaire La Ruche attache une grande importance à la protection des données personnelles des élèves,
                            parents, enseignants, visiteurs et utilisateurs. La présente politique décrit quelles informations nous collectons,
                            comment nous les utilisons, comment elles sont protégées et quels sont vos droits.
                        </p>
                    </section>

                    <hr className="my-6" />

                    <div className="grid gap-4 mb-4">
                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">1. Responsable du traitement</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Le responsable du traitement des données collectées sur le site est <a href="https://groupescolairelaruche.ma/" className="text-blue-600 hover:underline">Groupe Scolaire La Ruche</a>:
                            </p>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">2. Données collectées</h2>
                            <p className="mt-2 text-sm text-gray-600">Nous collectons les types de données suivants :</p>

                            <h3 className="mt-3 text-sm font-semibold text-gray-800">2.1 Données fournies volontairement</h3>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                <li>Nom et prénom</li>
                                <li>Adresse e-mail</li>
                                <li>Numéro de téléphone (si soumis)</li>
                                <li>Contenus envoyés pour publication (articles, photos, contributions)</li>
                                <li>Données de connexion pour comptes internes (enseignants / élèves)</li>
                            </ul>

                            <h3 className="mt-3 text-sm font-semibold text-gray-800">2.2 Données collectées automatiquement</h3>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                <li>Adresse IP</li>
                                <li>Données de navigation (pages vues, durée, etc.)</li>
                                <li>Type de navigateur et appareil</li>
                                <li>Cookies (voir section Cookies)</li>
                            </ul>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">3. Finalités</h2>
                            <p className="mt-2 text-sm text-gray-700">Les données sont utilisées pour :</p>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                <li>Gérer la publication d’articles et de contenus scolaires</li>
                                <li>Permettre la communication entre le site et les utilisateurs</li>
                                <li>Envoyer des notifications liées au journal</li>
                                <li>Améliorer l’expérience utilisateur et le fonctionnement du site</li>
                                <li>Garantir la sécurité du site et prévenir les abus</li>
                            </ul>
                            <p className="mt-2 text-sm text-gray-600">Les données ne sont pas utilisées à des fins commerciales.</p>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">4. Base légale du traitement</h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Le traitement repose sur :
                            </p>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                <li>Le consentement (formulaire, envoi d’articles, cookies)</li>
                                <li>L’intérêt légitime (sécurité du site, amélioration du service)</li>
                                <li>Les obligations institutionnelles liées à l’activité scolaire</li>
                            </ul>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">5. Partage des données</h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Les données peuvent être partagées uniquement avec :
                            </p>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                <li>Le personnel éducatif impliqué dans la gestion du journal</li>
                                <li>Nos prestataires techniques (hébergement, maintenance)</li>
                            </ul>
                            <p className="mt-2 text-sm text-red-600"><strong>Les données ne sont jamais vendues.</strong></p>
                        </section>


                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">6. Durée de conservation</h2>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                <li>Données de contact : jusqu’à 3 ans</li>
                                <li>Données techniques (logs) : jusqu’à 1 an</li>
                                <li>Contenus publiés : conservés jusqu’à suppression manuelle sauf demande contraire</li>
                            </ul>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">7. Protection des données</h2>
                            <p className="mt-2 text-sm text-gray-700">Mesures mises en place :</p>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                <li>Hébergement sécurisé</li>
                                <li>Accès restreint à l’administration</li>
                                <li>Protocoles de chiffrement (HTTPS)</li>
                                <li>Sauvegardes régulières</li>
                            </ul>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">8. Vos droits</h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Conformément aux lois applicables (ex. RGPD si applicable), vous disposez des droits suivants :
                            </p>
                            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                                <li>Droit d’accès</li>
                                <li>Droit de rectification</li>
                                <li>Droit à l’effacement</li>
                                <li>Droit d’opposition</li>
                                <li>Droit à la limitation du traitement</li>
                                <li>Droit de retrait du consentement</li>
                            </ul>
                            <p className="mt-2 text-sm text-gray-600">Pour exercer vos droits : <a href="mailto:contact@groupescolairelaruche.ma" className="text-blue-600 hover:underline">contactez nous</a></p>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">9. Contenu publié par les élèves</h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Les photos, vidéos ou travaux d’élèves ne sont publiés qu’avec l’autorisation préalable des parents ou tuteurs légaux.
                            </p>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">10. Liens externes</h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Notre site peut contenir des liens externes. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites.
                            </p>
                        </section>

                        <section className="h-fit">
                            <h2 className="text-lg font-semibold text-gray-900">11. Modifications de la politique</h2>
                            <p className="mt-2 text-sm text-gray-700">
                                Nous pouvons mettre à jour cette politique à tout moment. La version la plus récente sera disponible sur cette page.
                            </p>
                        </section>
                    </div>
                    <section className="h-fit sm:col-span-2">
                        <h2 className="text-lg font-semibold text-gray-900"><b>Contact</b></h2>
                        <p className="mt-2 text-sm text-gray-700">
                            Pour toute question concernant cette politique de confidentialité :
                        </p>
                        <ul className="mt-3 text-sm text-gray-700 space-y-1">
                            <li className="mb-2"><strong>Email:</strong> contact@groupescolairelaruche.ma</li>
                            <li className="mb-2"><strong>Phone:</strong> 05 22 90 73 70</li>
                            <li className="mb-2"><strong>Phone:</strong> +212661526737</li>
                            <li className="mb-4"><strong>Address:</strong> Casablanca, Oulfa</li>
                        </ul>
                    </section>
                </div>
            </article>
        </div>
    )
}