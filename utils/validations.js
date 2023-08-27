let required = (propertyType) => {
  return v => v && v.length > 0 || `Debe ingresar un ${propertyType}`
}
let minLength = (propertyType, minLength) => {
  return v => v && v.length >= minLength || `${propertyType} debe ser como mínimo ${minLength} caracteres`
}
let maxLength = (propertyType, maxLength) => {
  return v => v && v.length <= maxLength || `${propertyType} debe ser inferior a ${maxLength} caracteres`
}

let emailFormat = () => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/
  return v => v && regex.test(v) || "Debe ingresar un correo valido"
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat
}
