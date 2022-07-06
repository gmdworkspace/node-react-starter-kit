export const getTestData = () => {
    return fetch('http://localhost:3020/api/test').then(res=> res.json());
}