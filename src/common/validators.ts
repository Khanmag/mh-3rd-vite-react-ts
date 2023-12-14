


export const emailValidator = (value:string):boolean => {
  // eslint-disable-next-line no-useless-escape
  const regExp =  /^[a-zA-Z][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z][-\.]{0,}([a-zA-Z][-\.]{0,1})*[a-zA-Z]\.[a-zA-Z]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z]{0,}$/i
  return regExp.test(value)
}
