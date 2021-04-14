export const initForms = (passwordRef) => {
  const initialForms = {
    email: "",
    username: "",
    password: "",
    repassword: "",
    currentpassword: "",
    terms: false,
  }

  const initialValid = {
    validations: {
      email: {
        required: {
          value: true,
          message: "Ce champ est requis",
        },
        error: {
          admit: true,
          value: /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i,  //eslint-disable-line
          message: "L'adresse email n'est pas valide",
        },
        valid: {
          admit: true,
          value: /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i,  //eslint-disable-line
          message: "valide",
          desc: "L'email est valide",
        },
      },
      username: {
        required: {
          value: true,
          message: "Ce champ est requis",
        },
        errors: [
          {
            id: "min",
            admit: false,
            value: /.{4,}$/,
            message: "4min ",
            desc: "Minimum quatre de longueur",
          }, {
            id: "20max",
            admit: true,
            value: /.{20}$/,
            message: "20max",
            desc: "Maximum vingt de longueur",
          },
        ],
        valid: {
          admit: false,
          value: /^[a-zA-Z][0-9a-zA-Z]{4,}$/,
          message: "valide",
          desc: "Le pseudo est valide",
        },
      },
      passlogin: {
        required: {
          value: true,
          message: "Ce champ est requis",
        },
        valid: {
          admit: true,
          value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/,  // moyen
          message: "valide",
          desc: "Minimum huit caractères, au moins une lettre, un chiffre et un caractère spécial",
        },
        resets: [
          {
            id: 0,
            value: "password",
            desc: "Le mot de passe s'inscrire est supprimé",
          },
          {
            id: 1,
            value: "repassword",
            desc: "Le mot de passe de repetition s'inscrire est supprimé",
          },
        ],
      },
      password: {
        required: {
          value: true,
          message: "Ce champ est requis",
        },
        helps: [
          {
            id: "très faible",
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
            message: "+faible ",
            desc: "Minimum cinq caractères, au moins une lettre et un chiffre",
          }, {
            id: "faible",
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            message: "faible ",
            desc: "Minimum six caractères, au moins une lettre majuscule, une lettre minuscule et un chiffre",
          }, {
            id: "moyen",
            value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/,  // moyen
            message: "moyen ",
            desc: "Minimum huit caractères, au moins une lettre, un chiffre et un caractère spécial",
          }, {
            id: "fort",
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{14,}$/,
            message: "fort ",
            desc: "Minimum de quatorze caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
          }, {
            id: "très fort",
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{20,}$/,
            message: "+fort ",
            desc: "Minimum de vingt caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
          },
        ],
        errors: [
          {
            id: 0,
            value: /.{8,}$/,
            message: "8min ",
            desc: "Minimum huit de longueur",
          }, {
            id: 1,
            value: /^(?=.*[0-9])/,
            message: "nombre ",
            desc: "Au moins un chiffre",
          }, {
            id: 2,
            value: /[A-Za-z\d]/,
            message: "lettre ",
            desc: "Au moins une lettre",
          }, {
            id: 3,
            value: /^(?=.*[a-z])/,
            message: "minuscule ",
            desc: "Au moins une minuscule",
          }, {
            id: 4,
            value: /^(?=.*[A-Z])/,
            message: "majuscule ",
            desc: "Au moins une majuscule",
          }, {
            id: 5,
            value: /^(?=.*\W)/,   // @$!%*#?&()[|°_;,.-]
            message: "special ",
            desc: "Au moins un caractère spécial",
          },
        ],
        resets: [
          {
            id: 0,
            value: "repassword",
            desc: "Le mot de passe de repetition s'inscrire est supprimé",
          },
          {
            id: 1,
            value: "passlogin",
            desc: "Le mot de passe s'identifier est supprimé",
          },
        ],
        valid: {
          admit: true,
          value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/,  // moyen
          message: "valide",
          desc: "Minimum huit caractères, au moins une lettre, un chiffre et un caractère spécial",
        },
      },
      repassword: {
        required: {
          value: true,
          message: "Confirmer le mot de passe est requis",
        },
        validate: {
          value: passwordRef,
          message: "Le mot de passe ne correspond pas",
        },
        resets: [
          {
            id: 0,
            value: "passlogin",
            desc: "Le mot de passe de login est supprimé",
          },
        ],
        valid: {
          value: passwordRef,
          message: "valide",
          desc: "Le mot de passe correspond",
        }
      },
      currentpassword: {
        required: {
          value: true,
          message: "L'actuel mot de passe est requis",
        },
        valid: {
          value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/,  // moyen
          message: "valide",
          desc: "Le mot de passe correspond",
        }
      },
      terms: {
        required: {
          value: true,
          message: "Vous devez être en accord avec nos conditions",
        },
        valid: {
          value: true,
          message: "valide",
          desc: "Vous avez acceptés nos conditions",
        },
      },
    },
  }

  return { initialValid, initialForms }
}
