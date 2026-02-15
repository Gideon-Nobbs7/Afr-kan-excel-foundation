import http from 'k6/http'
import { check, group, fail } from 'k6';

export const options = {
    vus: 100,
    duration: '30s',
};
  
const EMAIL = 'gideonnobbs@gmail.com'; // Set your own email or `${randomString(10)}@example.com`;
const PASSWORD = '7bfibe5!';

const BASE_URL = 'https://hillside.s4dedunexus.com';

export function setup() {
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    const payload = JSON.stringify({
        email: EMAIL,
        password: PASSWORD,
    });

    const loginRes = http.post(
        `${BASE_URL}/auth/login`,
        payload,
        params
    );

    const responseData = loginRes.json(); 
    const authToken = responseData.access;

    console.log(authToken);

    check(authToken, { 
        'logged in successfully': (t) => t !== undefined && t.length > 0 
    });
}


// export default function (authToken) {
//     // set the authorization header on the session for the subsequent requests
//     const requestConfigWithTag = (tag) => ({
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//       tags: Object.assign(
//         {},
//         {
//           name: 'PrivateAdmissions',
//         },
//         tag
//       ),
//     });
  
//     let URL = `${BASE_URL}/enrollment/admission`;
  
//     group('02. Fetch my admissions', () => {
//       const res = http.get(`${URL}`, requestConfigWithTag({ name: 'Fetch' }));
//       check(res, { 'retrieve admissions': (r) => r.status === 200 });
//       check(res.json(), { 'retrieved admission list': (r) => r.ratings.length > 0 });
//     });
// }

export default function (authToken) {
    const params = {
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        },
    };

    let URL = `${BASE_URL}/enrollment/admission`;

    group('02. Fetch my admissions', () => {
        const res = http.get(URL, params);

        // 1. Check if the status is actually 200
        const isOk = check(res, { 'status is 200': (r) => r.status === 200 });

        if (isOk) {
            // 2. Only parse if the status was OK
            const body = res.json(); 
            check(body, { 
                'has ratings': (b) => b.ratings !== undefined,
                'list not empty': (b) => b.ratings && b.ratings.length > 0 
            });
        } else {
            // 3. Log the error message starting with 'Y' to see what it is
            console.warn(`Request failed! Status: ${res.status}. Response: ${res.body}`);
        }
    });
}