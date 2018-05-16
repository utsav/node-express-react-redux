import merge from 'lodash/merge';

export const post = async ({ url, body, success, failure, dispatch, headers }) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: merge({
        'Content-Type': 'application/json',
      },headers),
      body: JSON.stringify(body),
    })
    
    const data = await res.json()

    if(res.status >= 200 && res.status < 400 ){
      dispatch({ type: success, data });
    } else {
      if(data.message) alert(data.message)
      dispatch({ type: failure })
    }
  } catch (e) {
    dispatch({ type: failure })
  }
}

export const get = async ({ url, success, failure, headers, dispatch }) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: headers,
    })
    
    const data = await res.json()

    if(res.status >= 200 || res.status < 400 ){
      dispatch({ type: success, data });
    } else {
      if(data.message) alert(data.message)
      dispatch({ type: failure })
    }
  } catch (e) {
    dispatch({ type: failure })
  }
}

export const put = async ({ url, body, success, failure, dispatch, headers }) => {
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: merge({
        'Content-Type': 'application/json',
      },headers),
      body: JSON.stringify(body),
    })

    const data = await res.json()

    if(res.status >= 200 || res.status < 400 ){
      dispatch({ type: success, data });
    } else {
      if(data.message) alert(data.message)
      dispatch({ type: failure })
    }
  } catch (e) {
    dispatch({ type: failure })
  }
}

export const delet = async ({ url, body, success, failure, dispatch, headers }) => {
  try {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: merge({
        'Content-Type': 'application/json',
      },headers),
      body: JSON.stringify(body),
    })
    
    const data = await res.json()

    if(res.status >= 200 || res.status < 400 ){
      dispatch({ type: success, data });
    } else {
      if(data.message) alert(data.message)
      dispatch({ type: failure })
    }
  } catch (e) {
    dispatch({ type: failure })
  }
}