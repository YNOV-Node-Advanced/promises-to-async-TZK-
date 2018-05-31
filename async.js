async function superCompress (input) {
    try {
        let cache = await readFromCache(input);
    } catch (error) {
        if (error.code != 'NoCache') {
            throw error;
        }

        let fileContent = await readFromFile(input);
        cache = await storeInCache(input, fileContent)
    }

    return await compress(cache);
}
