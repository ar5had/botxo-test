const validate = values => {
  const errors = {}

  if (!values.members || !values.members.length) {
    errors.members = { _error: 'At least one user must be entered' }
  } else {
    const membersArrayErrors = []
    values.members.forEach((member, memberIndex) => {
      const memberErrors = {}
      if (!member || !member.name) {
        memberErrors.name = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
      if (!member || !member.age) {
        memberErrors.age = 'Required'
        membersArrayErrors[memberIndex] = memberErrors
      }
    })
    if (membersArrayErrors.length) {
      errors.members = membersArrayErrors
    }
  }
  return errors
}

export default validate
