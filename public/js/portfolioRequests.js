async function sendDelete(url, filename) {
    console.log(filename);
    // Awaiting fetch which contains 
    // method, headers and content-type
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: filename
        })
    });

    // Awaiting for the resource to be deleted
    const resData = 'resource deleted...';

    // Return response data 
    location.reload()
    return resData;
}