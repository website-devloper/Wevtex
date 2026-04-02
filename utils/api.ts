export function getStrapiURL(path = '') {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://127.0.0.1:1337'}${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
    // Merge default and custom options
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    };

    // Build request URL
    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${getStrapiURL(
        `/api${path}${queryString ? `?${queryString}` : ''}`
    )}`;

    // Trigger API call
    try {
        const response = await fetch(requestUrl, mergedOptions);

        if (!response.ok) {
            console.error(response.statusText);
            throw new Error(`An error occurred while fetching from Strapi`);
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Fetch error:', err);
        return null; // Return null gracefully so UI can fallback
    }
}
