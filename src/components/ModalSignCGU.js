import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { useOutsideModal } from '../hooks/useOutsideModal'

import {
  ModalAuthBackdrop,
  ModalAuthWrapper,
  ModalAuthHeader,
  ModalAuthHeading,
  ModalAuthBody,
  ModalAuthFieldset,
} from '../styles/index'


export const ModalSignCGU = forwardRef((props, ref) => {
  // obtains the input values of the inputs
  const innerRef  = useRef(null)

  // initialization of functionalities
  const [open, setOpen] = useState(false)

  // methods of functionalities
  useImperativeHandle(ref, () => {
    return {
      displayName: 'modal-signCGU',
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })

  useOutsideModal(innerRef, () => setOpen(!open))

  return (
    <>
      {open && <ModalAuthBackdrop>
        <ModalAuthWrapper width="600px" height="700px" top="40px" className="modal-cgu">
          <div ref={innerRef}>
            <ModalAuthHeader>
              CONDITIONS GÉNÉRALES D&apos;UTILISATION
              <p>En vigueur au 01/04/2021</p>
            </ModalAuthHeader>
            <ModalAuthBody>
              <ModalAuthFieldset>
                <p>Les présentes conditions générales d&apos;utilisation (dites <strong>« CGU »</strong>) ont pour objet l&apos;encadrement juridique des modalités de mise à disposition du site et des services par son auteur et de définir les conditions d&apos;accès et d&apos;utilisation des services par <strong>« l&apos;Utilisateur »</strong>.</p>
                <p>Les présentes CGU sont accessibles sur le site à la rubrique <strong>«CGU»</strong>.</p>
                <p>Toute inscription ou utilisation du site implique l&apos;acceptation sans aucune réserve ni restriction des présentes CGU par l&apos;utilisateur. Lors de l&apos;inscription sur le site via le Formulaire d&apos;inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte ».</p>
                <p>En cas de non-acceptation des CGU stipulées dans le présent contrat, l&apos;Utilisateur se doit de renoncer à l&apos;accès des services proposés par le site.</p>
                <p>https://admin-react-demo.firebaseapp.com/ se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.</p>
              </ModalAuthFieldset>
              <ModalAuthHeading>
                ARTICLE 1 : LES MENTIONS LÉGALES
              </ModalAuthHeading>
              <ModalAuthFieldset>
                <p>L&apos;édition et la direction de la publication du site https://admin-react-demo.firebaseapp.com/ est assurée par Yannick Goalen, domicilié à Toulon en France.</p>
                <p>Adresse e-mail y.goalen@outlook.com</p>
                <p>L&apos;hébergeur du site https://admin-react-demo.firebaseapp.com/ est la société Firebase, site firebase.google.com, dont le siège social est situé 1600 Amphitheatre Parkway , Mountain View, CA 94043 États-Unis.</p>
              </ModalAuthFieldset>
              <ModalAuthHeading>
                ARTICLE 2 : ACCÈS AU SITE
              </ModalAuthHeading>
              <ModalAuthFieldset>
                <p>Le site https://admin-react-demo.firebaseapp.com/ permet à l&apos;Utilisateur un accès gratuit à tous les services du site.</p>
                <p>Le site internet propose les services suivants :</p>
                <ul>
                  <li>une <i>todo liste</i></li>
                </ul>
                <p>Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l&apos;Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>
                <p>L&apos;Utilisateur non membre n&apos;a pas accès aux services réservés. Pour cela, il doit s&apos;inscrire en remplissant le formulaire. En acceptant de s&apos;inscrire aux services réservés, l&apos;Utilisateur membre s&apos;engage à fournir des informations sincères et exactes concernant son état civil et ses coordonnées, notamment son adresse email.</p>
                <p>Pour accéder aux services, l&apos;Utilisateur doit ensuite s&apos;identifier à l&apos;aide de son identifiant et de son mot de passe qu&apos;il a fourni lors son inscription.</p>
                <p>Tout utilisateur membre régulièrement inscrit pourra également solliciter sa désinscription en se rendant à la page dédiée sur son espace personnel. Celle-ci sera effective dans un délai raisonnable.</p>
                <p>Tout événement dû à un cas de force majeure ayant pour conséquence un dysfonctionnement du site ou serveur et sous réserve de toute interruption ou modification en cas de maintenance, n&apos;engage pas la responsabilité de https://admin-react-demo.firebaseapp.com/. Dans ces cas, l&apos;Utilisateur accepte ainsi ne pas tenir rigueur à l&apos;éditeur de toute interruption ou suspension de service, même sans préavis.</p>
                <p>L&apos;utilisateur a la possibilité de contacter le site par messagerie électronique à l&apos;adresse email de l&apos;éditeur communiqué à l’ARTICLE 1.</p>
              </ModalAuthFieldset>
              <ModalAuthHeading>
                ARTICLE 3 : COLLECTE DES DONNÉES
              </ModalAuthHeading>
              <ModalAuthFieldset>
                <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les Utilisateurs.</p>
              </ModalAuthFieldset>
              <ModalAuthHeading>
                ARTICLE 4 : PROPRIÉTÉ INTELLECTUELLE
              </ModalAuthHeading>
              <ModalAuthFieldset>
                <p>Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l&apos;objet d&apos;une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d&apos;auteur.</p>
                <p>L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s&apos;engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
                <p>Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l&apos;autorisation expresse de l’exploitant du site Internet constituerait une contrefaçon sanctionnée par l&apos;article L 335-2 et suivants du Code de la propriété intellectuelle.</p>
                <p>Il est rappelé conformément à l&apos;article L122-5 du Code de propriété intellectuelle que l&apos;Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l&apos;auteur et sa source.</p>
              </ModalAuthFieldset>
              <ModalAuthHeading>
                ARTICLE 5 : RESPONSABILITÉ
              </ModalAuthHeading>
              <ModalAuthFieldset>
                <p></p>Les sources des informations diffusées sur le site https://admin-react-demo.firebaseapp.com/ sont réputées fiables mais le site ne garantit pas qu&apos;il soit exempt de défauts, d&apos;erreurs ou d&apos;omissions.
                <p>Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle.</p>
                <p>Malgré des mises à jour régulières, le site https://admin-react-demo.firebaseapp.com/ ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication. De même, le site ne peut être tenue responsable de l&apos;utilisation et de l&apos;interprétation de l&apos;information contenue dans ce site.</p>
                <p>L&apos;Utilisateur s&apos;assure de garder son mot de passe secret. Toute divulgation du mot de passe, quelle que soit sa forme, est interdite. Il assume les risques liés à l&apos;utilisation de son identifiant et mot de passe. Le site décline toute responsabilité.</p>
                <p>Le site https://admin-react-demo.firebaseapp.com/ ne peut être tenu pour responsable d&apos;éventuels virus qui pourraient infecter l’ordinateur ou tout matériel informatique de l&apos;Internaute, suite à une utilisation, à l&apos;accès, ou au téléchargement provenant de ce site.</p>
                <p>La responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d&apos;un tiers.</p>
              </ModalAuthFieldset>
              <ModalAuthHeading>
                ARTICLE 6 : LIENS HYPERTEXTES
              </ModalAuthHeading>
              <ModalAuthFieldset>
                <p>Des liens hypertextes peuvent être présents sur le site. L&apos;Utilisateur est informé qu&apos;en cliquant sur ces liens, il sortira du site https://admin-react-demo.firebaseapp.com/. Ce dernier n&apos;a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.</p>
              </ModalAuthFieldset>
              <ModalAuthHeading>
                ARTICLE 7 : COOKIES
              </ModalAuthHeading>
              <ModalAuthFieldset>
                <p>L&apos;Utilisateur est informé que lors de ses visites sur le site, un cookie peut s&apos;installer automatiquement sur son logiciel de navigation.</p>
                <p></p>
                <p>Les cookies sont de petits fichiers stockés temporairement sur le disque dur de l&apos;ordinateur de l&apos;Utilisateur par votre navigateur et qui sont nécessaires à l&apos;utilisation du site https://admin-react-demo.firebaseapp.com/. Les cookies ne contiennent pas d&apos;information personnelle et ne peuvent pas être utilisés pour identifier quelqu&apos;un. Un cookie contient un identifiant unique, généré aléatoirement et donc anonyme. Certains cookies expirent à la fin de la visite de l&apos;Utilisateur, d&apos;autres restent.</p>
                <p>L&apos;information contenue dans les cookies est utilisée pour améliorer le site https://admin-react-demo.firebaseapp.com/.</p>
                <p>En naviguant sur le site, L&apos;Utilisateur les accepte.</p>
                {/* <p>L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.</p>
                <p>A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.</p> */}
                <p>L&apos;utilisateur pourra désactiver ces cookies par l&apos;intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
              </ModalAuthFieldset>
              <ModalAuthHeading>
                ARTICLE 8 : DROIT APPLICABLE ET JURIDICTION COMPÉTENTE
              </ModalAuthHeading>
              <ModalAuthFieldset>
                <p>La législation française s&apos;applique au présent contrat. En cas d&apos;absence de résolution amiable d&apos;un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.</p>
                <p>Pour toute question relative à l&apos;application des présentes CGU, vous pouvez joindre l&apos;éditeur aux coordonnées inscrites à l&apos;ARTICLE 1.</p>
                <p>CGU réalisé sur https://www.legalplace.fr/</p>
              </ModalAuthFieldset>
            </ModalAuthBody>
          </div>
        </ModalAuthWrapper>
      </ModalAuthBackdrop>}
    </>
  )
})
