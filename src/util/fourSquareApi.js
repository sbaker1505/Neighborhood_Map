const API_ID = 'WMXSGYBP0NERQAYDGKJWUOTBL4SB4G1FR5TQCIIEV23RFC3J'
const API_SECRET = 'X1KERSR0SZ1GURFZU0KYBLDT4Z0ISVYQZVLBQX2U5BT50TFE'

const url = 'https://api.foursquare.com/v2/venues'

export const getVenues = (lat, lng) =>
  fetch(`${url}/explore?v=20180219&ll=${lat},${lng}&section=arts&client_id=${API_ID}&client_secret=${API_SECRET}`)
  .then(data => data.json())
