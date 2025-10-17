
export default function exportThroughFunction() {

  const f2 = () => {
    return 'f2'
  }

  const v2 = 'hi I am const v2'

  return {
    service: {
      f2, v2
    }
  }
}







