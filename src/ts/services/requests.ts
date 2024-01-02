const postData = async (url: string, data: string) => {
    let res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
    return await res.text();
};

const getResource = async (url: string) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    };

    return await res.json();
};

export {postData, getResource};