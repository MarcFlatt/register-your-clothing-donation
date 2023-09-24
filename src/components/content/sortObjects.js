/**
 * sort the given objects asc
 *
 * @param {object} objectA
 * @param {object} objectB
 * @return {int}
 */
function sortObjectsAsc(objectA, objectB) {
  if (objectA.value < objectB.value) {
    return -1
  } else if (objectA.value > objectB.value) {
    return 1
  } else {
    return 0
  }
}

export default sortObjectsAsc
