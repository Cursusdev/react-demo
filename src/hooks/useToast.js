import { useState, useContext, useEffect } from 'react'
import { ToastContext } from '../context/toast-context'


export const useToast = () => {
  const [toastList, setToastList] = useContext(ToastContext)
  const [toastItems, setToastItems] = useState([])
  
  let toastProperties = null
  const autoDelete = true
  const dismissTime = 5000
  
  function showToast(type) {
    const id = Math.floor((Math.random() * 101) + 1)
  
    const colors = {
      success: '#5cb85c',
      danger: '#d9534f',
      info: '#5bc0de',
      warning: '#f0ad4e',
    }

    switch(type) {
      // home toasts
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'Ceci est un composant de toast de réussite',
          backgroundColor: colors.success,
          icon: 'check'
        }
        break
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'Ceci est un composant toast d\'information',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'Ceci est un composant toast d\'avertissement',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'Ceci est un composant de toast d\'erreur',
          backgroundColor: colors.danger,
          icon: 'error'
        }
        break
      // authentication toats
      case 'info-empty-auth':
        toastProperties = {
          id,
          title: 'Authentification vide',
          description: 'Veuillez remplir les champs de formulaire',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'success-signup':
        toastProperties = {
          id,
          title: 'Inscription réussie',
          description: 'Vous êtes enregistré comme utilisateur',
          backgroundColor: colors.success,
          icon: 'check'
        }
        break
      case 'success-signin':
        toastProperties = {
          id,
          title: 'Connexion réussie',
          description: 'Vous êtes connecté à votre compte utilisateur!',
          backgroundColor: colors.success,
          icon: 'check'
        }
        break
      case 'info-unsupported-Provider':
        toastProperties = {
          id,
          title: 'Connexion Social Link non autorisé',
          description: 'Votre connection via Social Link  n\'aboutira pas',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'success-signinAnonymous':
        toastProperties = {
          id,
          title: 'Connexion au lien social anonymous réussie',
          description: 'Vous êtes connecté avec un lien social anonymous',
          backgroundColor: colors.success,
          icon: 'check'
        }
        break
      case 'info-signAnonymous':
        toastProperties = {
          id,
          title: 'Informe la possibilté de s\'enregistrer à un lien social',
          description: 'Enregister votre lien social pour intéger la base de données',
          backgroundColor: colors.success,
          icon: 'info'
        }
        break
      case 'info-confirm-forget':
        toastProperties = {
          id,
          title: 'Confirme le mot de passe oublié',
          description: 'Merci de consultez votre boite mail pour poursuivre l’inscription.',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'info-confirm-change':
        toastProperties = {
          id,
          title: 'Confirme le mot de passe changé',
          description: 'Vous venez de changer votre mot de passe à l\'instant',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'info-confirm-auth':
        toastProperties = {
          id,
          title: 'Confirme le token dans url',
          description: 'Vous confirmez que vous êtes l\'utilisateur à l\'origine de la demande',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'info-form-clean':
        toastProperties = {
          id,
          title: 'Confirme le nettoyage',
          description: 'Vos champs d\'entrées sont nettoyées',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'success-signout':
        toastProperties = {
          id,
          title: 'Déconnexion réussie',
          description: 'Vous êtes déconnecté de votre compte utilisateur',
          backgroundColor: colors.success,
          icon: 'check'
        }
        break
      case 'success-signoutAnonymous':
        toastProperties = {
          id,
          title: 'Déconnexion réussie',
          description: 'Votre compte anonymous a été supprimé',
          backgroundColor: colors.success,
          icon: 'check'
        }
        break
      case 'info-update-profil':
        toastProperties = {
          id,
          title: 'Modifie le profil utilisateur',
          description: 'Vos modifications sont prises en compte',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'fail-update-profile':
        toastProperties = {
          id,
          title: 'Echec mise à jour du profil',
          description: 'Echec dans vos modifications de votre profil',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'warning-update-fields':
        toastProperties = {
          id,
          title: 'Echec de mise à jour de champs',
          description: 'Valeur de champs de modification incorrect',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'warning-user-deletion':
        toastProperties = {
          id,
          title: 'Suppression de compte par l\'utilisateur',
          description: 'Vous êtes sur le point de supprimé votre compte utilisateur',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'success-account-delete':
        toastProperties = {
          id,
          title: 'Confirme la suppression de l\'utilisateur',
          description: 'Compte définivement supprimé!',
          backgroundColor: colors.success,
          icon: 'check'
        }
        break
      case 'warning-user-post':
        toastProperties = {
          id,
          title: 'Averti d\'une erreur sur l\'utilisateur',
          description: 'L\'utilisateur n\'a pas été trouvé',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'warning-user-oobCode':
        toastProperties = {
          id,
          title: 'Echec modification mot de passe de l\'utilisateur',
          description: 'Le lien a expiré ou a déjà été utilisé',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'warning-password-post':
        toastProperties = {
          id,
          title: 'Averti d\'une erreur sur le mot de passe',
          description: 'Le mot de passe n\'est pas valide ou l\'email de l\'utilisateur est utilisé',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'warning-account-exist':
        toastProperties = {
          id,
          title: 'Averti d\'une erreur sur l\'identifiant',
          description: 'L\'adresse e-mail est déjà utilisée par un autre compte',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'warning-auth':
        toastProperties = {
          id,
          title: 'Averti d\'une erreur globale',
          description: 'Erreur inexpliquée de disfonctionnement ou de connexion',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'danger-auth':
        toastProperties = {
          id,
          title: 'Erreur menaçante trouvée',
          description: 'Erreur inexpliquée de disfonctionnement ou de connexion',
          backgroundColor: colors.danger,
          icon: 'error'
        }
        break
      // todos toasts
      case 'info-snapshot-todo':
        toastProperties = {
          id,
          title: 'Obtient des todos',
          description: 'Vos données sont actualisées',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'info-add-todo':
        toastProperties = {
          id,
          title: 'Ajout d\'un todo',
          description: 'Votre donnée est enregistrée',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'info-update-todo':
        toastProperties = {
          id,
          title: 'Modification d\'un todo',
          description: 'Votre donnée est enregistrée',
          backgroundColor: colors.info,
          icon: 'info'
        }
        break
      case 'success-delete-todo':
        toastProperties = {
          id,
          title: 'Suppression d\'un todo',
          description: 'Votre donnée est bien supprimé!',
          backgroundColor: colors.success,
          icon: 'check'
        }
        break
      case 'warning-todo':
        toastProperties = {
          id,
          title: 'Averti d\'une erreur globale',
          description: 'Erreur inexpliquée de l\'opération',
          backgroundColor: colors.warning,
          icon: 'warning'
        }
        break
      case 'danger-todo':
        toastProperties = {
          id,
          title: 'Erreur menaçante trouvée',
          description: 'Erreur inexpliquée de disfonctionnement ou de connexion',
          backgroundColor: colors.danger,
          icon: 'error'
        }
        break

      default:
        setToastList([]);
    }
    
    return setToastList([...toastList, toastProperties])
  }
  
  const deleteToast = id => {
    const toastListIndex = toastList.findIndex(e => e.id === id)
    const toastItemsItem = toastItems.findIndex(e => e.id === id)
    toastList.splice(toastListIndex, 1)
    toastItems.splice(toastItemsItem, 1)
    setToastList([...toastList])
  }

  useEffect(() => {
    setToastItems([...toastList])

  }, [toastList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastItems.length && toastList.length) {
        deleteToast(toastItems[0].id);
      }
    }, dismissTime)

    return () => { clearInterval(interval) }

  // eslint-disable-next-line
  }, [toastItems, autoDelete, dismissTime, toastList])

  return {
    toastList,
    toastItems,
    showToast,
    deleteToast
  }
}

