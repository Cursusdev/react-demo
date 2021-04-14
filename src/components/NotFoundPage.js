import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import {
  SectionFound,
} from '../styles/index'


export const NotFoundPage = () => {
  let location = useLocation()

  return (
    <SectionFound>
      <p>Aucune page trouver pour <code>{location.pathname}</code></p>
      <p>
        Revenir <Link to="/"><span>à l&apos;accueil</span></Link>.
      </p>
    </SectionFound>
  )
}
