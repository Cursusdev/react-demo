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
  Email,
} from '../assets/index'

export const ModalAbout = forwardRef((props, ref) => {
  // obtains the input values of the inputs
  const innerRef  = useRef(null)

  // initialization of functionalities
  const [open, setOpen] = useState(false)

  // methods of functionalities
  useImperativeHandle(ref, () => {
    return {
      displayName: 'modal-about',
      open: () => setOpen(true),
      close: () => setOpen(false)
    }
  })

  useOutsideModal(innerRef, () => setOpen(!open))

  return (
    <>
      {open && <ModalBackdrop>
        <ModalWrapper width="400px" height="570px" top="100px">
          <div ref={innerRef}>
            <ModalHeader>
              A propos.
            </ModalHeader>
            <ModalBody>
              <ModalHeading>
                Informations:
              </ModalHeading>
              <ModalFieldset>
                <p>L&apos;application de démonstation utilise la bibliothèque React17 dans sa version la plus récente.</p>
                <p>Axée sur l&apos;expérience utilisateur, elle est imparfaite car c&apos;est mon premier cas d&apos;études de ses fonctionnalités.</p>
                <p>Les objectifs étant de réaliser des cas pratiques d&apos;utilisations en production.</p>
                <p>A terme l&apos;application pourra éliminer une dette technique encore en excès.</p>
              </ModalFieldset>
              <ModalHeading>
                Contacts:
              </ModalHeading>
              <ModalFieldset>
                L&apos;officier en charge de vos données d&apos;authentification:
              </ModalFieldset>
              <ModalFieldset>
                <ul>
                  <li>Yannick Goalen</li>
                </ul>
              </ModalFieldset>
              <ModalFieldset>
                <Email /><span>y.goalen@outlook.com</span>
              </ModalFieldset>
            </ModalBody>
          </div>
        </ModalWrapper>
      </ModalBackdrop>}
    </>
  )
})