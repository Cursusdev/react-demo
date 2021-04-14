import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { useOutsideModal } from '../hooks/useOutsideModal'

import {
  ModalBackdrop,
  ModalWrapper,
  ModalHeader,
  ModalHeading,
  ModalBody,
  ModalFieldset,
} from '../styles/index'
import {
  Mechanical,
  Timer,
  Share,
} from '../assets/index'


export const ModalCookies = forwardRef((props, ref) => {
  // obtains the input values of the inputs
  const innerRef  = useRef(null)

  // initialization of functionalities
  const [open, setOpen] = useState(false)

  // methods of functionalities
  useImperativeHandle(ref, () => {
    return {
      displayName: 'modal-cookies',
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })

  useOutsideModal(innerRef, () => setOpen(!open))

  return (
    <>
      {open && <ModalBackdrop>
        <ModalWrapper width="450px" height="570px" top="100px">
          <div ref={innerRef}>
            <ModalHeader>
              Gérer mes cookies.
            </ModalHeader>
            <ModalBody>
              <ModalHeading>
                <Mechanical />
                Utilisation
              </ModalHeading>
              <ModalFieldset>
                <p>L&apos;application utilise des cookies et des jetons d&apos;authentification (avec les mêmes revendications) qui sont nécessaires à son fonctionnement depuis le navigateur uniquement.</p>
                <p>Le site est sécurisé via https pour tous les échanges d&apos;informations et de données qui sont effectués entre le navigateur et l&apos;application web.</p>
                <p>Il s&apos;agit de traceurs, exemptés de consentement, qui utilisent les API: <i>LocalStorage - IndexedDB - Cookies</i></p>
              </ModalFieldset>
              <ModalHeading>
                <Timer />
                Conservation
              </ModalHeading>
              <ModalFieldset>
                <ul>
                  <li>Concernant le cookie de consentement, celui-ci est conserver pendant 7 jours.</li>
                  <li>Les données locales ponctuelles sont ajouter/supprimer à chaque début/fin de session. En bref les données persistent dans un onglet fermé et s&apos;actualise lors de sa réouverture.</li>
                  <li>Vos données de todoList sont permanentes mais un effacement de chacunes de vos entrées supprime sa base.</li>
                </ul>
              </ModalFieldset>
              <ModalHeading>
                <Share />
                Partage
              </ModalHeading>
              <ModalFieldset>
                <p>Les données stockés et non sensibles, à des fins de démonstation utilisées par l&apos;application 
                ne sont pas partagées.</p>
                <p>Néanmoins mes services d&apos;hébergements (statisques ou autres extensions) seront probablement activés à des fins de découvertes.</p>
              </ModalFieldset>
            </ModalBody>
          </div>
        </ModalWrapper>
      </ModalBackdrop>}
    </>
  )
})