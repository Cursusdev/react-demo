import { useState } from 'react'


export function useForm({ validations, initialValues = {} }) {
  if (!validations) {
    throw new Error('the option `validations` is required');
  }

  if (typeof validations !== 'object') {
    throw new Error('the option `validations` should be an object');
  }

  if (typeof initialValues !== 'object') {
    throw new Error('the option `initialValues` should be an object');
  }

  const [values, setValues] = useState(initialValues);
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [helps, setHelps] = useState({});
  const [valids, setValids] = useState({});

  function validateField(name, value) {
    const rules = validations[name]
    if (rules) {
      // reset repeat and login password input value when input password
      if (typeof rules.resets === 'object') {
        rules.resets.forEach(x => {
          if (x.value !== null) {
            const el = x.value
            setValues(state => ({
              ...state,
              [el]: '',
            }))
            setFields(state => ({
              ...state,
              [el]: '',
            }))
            setErrors(state => ({
              ...state,
              [el]: '',
            }))
            setHelps(state => ({
              ...state,
              [el]: '',
            }))
          }
        })
      }

      // require: email - passlogin - username - password - repassword - currentpassword
      if (rules.required) {
        if (typeof rules.required.value === 'boolean') {
          if (value === '' && name !== 'terms') {
            setErrors(state => ({
              ...state,
              [name]: ''
            }))
            return rules.required.message || 'required';
          }
        }

        // validate: terms
        if (typeof rules.required.value === 'boolean') {
          if (values[name] && name === 'terms') {
            setValues(state => ({
              ...state,
              [name]: false
            }))
            setValids(state => ({
              ...state,
              [name]: ''
            }))
            return rules.required.message || 'invalid'
          }
        }
      }

      // error: email
      if (typeof rules.error === 'object') {
        if (rules.error.value) {
          if (rules.error.admit) {
            if (!new RegExp(rules.error.value).exec(value)) {
              return rules.error.message || 'invalid';
            }
          } else {
            if (new RegExp(rules.error.value).exec(value)) {
              return rules.error.message || 'invalid';
            }
          }
        }
      }

      // validate: match repeat password with input password
      if (typeof rules.validate === 'object') {
        if (rules.validate.value.current !== null) {
          if (rules.validate.value.current.value !== value) {
            return rules.validate.message || 'invalid'
          }
        }
      }
    }

    return ''
  }

  function validateErrors(name, value) {
    const rules = validations[name]
    const objErr = {}
    const anyErr = []

    if (rules) {
      if (rules.errors) {
        rules.errors.forEach(x => {
          // username input error with max error admit
          if (x.admit) {
            if (new RegExp(Object(x).value).test(value)) {
              const idValue = Object(x).id.toString()
              objErr[idValue] = Object(x).message
              anyErr.push(objErr[idValue])
              setValids(state => ({
                ...state,
                [name]: ''
              }))
            }
          } else {
            // username and password input error
            if (!new RegExp(Object(x).value).test(value)) {
              const idValue = Object(x).id.toString()
              objErr[idValue] = Object(x).message
              anyErr.push(objErr[idValue])
            }
          }
        })
        return anyErr;
      }
    }

    return ''
  }

  function validateHelps(name, value) {
    const rules = validations[name]
    const objHelp = {}
    const anyHelp = []

    if (rules) {
      if (rules.helps) {
        // see the complexity of passwords
        rules.helps.forEach(x => {
          if (new RegExp(Object(x).value).test(value)) {
            const idValue = Object(x).id.toString()
            objHelp[idValue] = Object(x).message
            anyHelp.push(objHelp[idValue])
          }
        })
        return anyHelp;
      }
    }

    return ''
  }

  function validateValid(name, value) {
    const rules = validations[name]

    if (rules) {
      if (rules.valid) {
        // validate: email - passlogin - username - password - currentpassword
        if (typeof new RegExp(rules.valid.value) === 'object') {
          if (values[name] !== 'false') {
            if (new RegExp(rules.valid.value).test(value)) {
              // validate repassword if password is valid
              if (typeof rules.valid.value.current === 'object') {
                if (rules.valid.value.current.value === value) {
                  return rules.valid.message || 'valide'
                }
                return ''
              }
              return rules.valid.message || 'valide'
            }
          }
        }

        // validate: terms
        if (typeof rules.valid.value === 'boolean') {
          if (rules.valid.value) {
            if (!values[name]) {
              setValues(state => ({
                ...state,
                [name]: true
              }))
              setValids(state => ({
                ...state,
                [name]: rules.valid.message
              }))
            }
            return rules.valid.message || 'valide'
          }
        }
      }
    }

    return ''
  }

  function clear(values, fields, errors, helps, valids) {
    if (values) setValues({})
    if (fields) setFields({})
    if (errors) setErrors({})
    if (helps) setHelps({})
    if (valids) setValids({})
  }

  function bindField(name, defaultValue) {
    if (!name) {
      throw new Error('The field name parameter is required');
    }

    if (name && typeof name !== 'string') {
      throw new Error('The field name should be a string');
    }

    if (defaultValue && typeof defaultValue !== 'string') {
      return ''
    }

    return {
      value: values[name] || defaultValue || '',
      onChange: e => {
        const { value } = e.target

        setValues(state => ({
          ...state,
          [name]: value,
        }))

        setFields(state => ({
          ...state,
          [name]: validateField(name, value),
        }))

        setErrors(state => ({
          ...state,
          [name]: validateErrors(name, value),
        }))

        setHelps(state => ({
          ...state,
          [name]: validateHelps(name, value),
        }))

        setValids(state => ({
          ...state,
          [name]: validateValid(name, value),
        }))
      },
    }
  }

  return {
    values,
    fields,
    errors,
    helps,
    valids,
    validateField,
    validateErrors,
    validateHelps,
    validateValid,
    bindField,
    clear,
  }
}
