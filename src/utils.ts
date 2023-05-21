interface TValidation {
  value: boolean
  error: string | boolean
}

const validatePositiveNumbers = (str: string): TValidation => {
  const regex = /^(?:\d+|0|\s*)$/
  return {
    value: regex.test(str),
    error: str.charAt(0) === '0' ? "Can't be zero" : !regex.test(str)
  }
}

export {
  validatePositiveNumbers
}
