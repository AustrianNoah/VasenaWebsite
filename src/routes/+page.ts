/** @type {import('./$types').PageLoad} */
export async function load() {
    const res = await fetch(`https://api.mcsrvstat.us/2/luriax.de`);
    if (res.ok) {
        const data = await res.json();
        if (data.online) {
            return {
                mc: data
            };
        } else {
            return {
                mc: {
                    players: {
                        online: 0,
                        max: 0
                    }
                }
            };
        }
    } else {
        return {
            mc: {
                players: {
                    online: 0,
                    max: 0
                }
            }
        };
    }
}