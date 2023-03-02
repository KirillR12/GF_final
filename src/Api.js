/* eslint-disable*/
export const getProductsByIds = ({ queryKey }) => {
    const [_key, idProduct] = queryKey;
    return Promise.all(idProduct.map(id => fetch(`https://api.react-learning.ru/products/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })))
        .then((resMass) => {
            return Promise.all(resMass.map((res) => {
                if (res.status !== 200) {
                    return res.json().then((data) => {
                        throw new Error(data.message)
                    });
                }
                return res.json()
            }))
        })
        .then((dataMass) => {
            return dataMass;
        })
}

export const signIn = (data) => fetch('https://api.react-learning.ru/signin',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(data),
    })
    .then((res)=> {
        if(res.status !== 200){
            return res.json().then((data) => {
                throw new Error(data.message)
            });
        }
        return res.json();
    })
    .then((data)=> {
        return data;
    })

export const signUp = (data) => fetch('https://api.react-learning.ru/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data),
})
    .then((res) => {
        if (res.status !== 201) {
            return res.json().then((data) => {
                throw new Error(data.message)
            });
        }
        return res.json();
    })
    .then((data)=> {
        return data;
    })

export const getUserInfo = () => fetch('https://api.react-learning.ru/v2/sm8/users/me', {
    method: 'GET',
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
})
    .then((res) => {
        if (res.status !== 200) {
            return res.json().then((data) => {
                throw new Error(data.message)
            });
        }
        return res.json();
    })
    .then((data) => {
        return data;
    })

export const getProductById = ({ queryKey }) => {
    const [_key, token, id] = queryKey;
    return fetch(`https://api.react-learning.ru/products/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            if (res.status !== 200) {
                return res.json().then((data) => {
                    throw new Error(data.message)
                });
            }
            return res.json()
        })
        .then((data) => {
            return data;
        })
}

export const getProductsByWord = ({ queryKey }) => {
    const [_key, word, token] = queryKey;
    return fetch(`https://api.react-learning.ru/products/search?query=${word}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
        .then((res) => {
            if (res.status !== 200) {
                return res.json().then((data) => {
                    throw new Error(data.message)
                });
            }
            return res.json();
        })
        .then((data) => {
            return data;
        })
}

export const createProduct = (data) => fetch('https://api.react-learning.ru/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: `Bearer ${data[1]}`
    },
    body: JSON.stringify(data[0]),
})
    .then((res) => {
        if (res.status !== 201) {
            return res.json().then((data) => {
                throw new Error(data.message)
            });
        }
        return res.json();
    })
    .then((data) => {
        return data;
    })

    export const getCommentsByProductID = ({ queryKey }) => {
        const [_key, id, token] = queryKey;
        return fetch(`https://api.react-learning.ru/products/review/${id}`,{
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    .then((res)=> {
        if(res.status !== 200){
            return res.json().then((data) => {
                throw new Error(data.message)
            });
        }
        return res.json();
    })
    .then((data)=> {
        return data;
    })
    }