async function superCompress (input) {
    let content;

    try {
        content = await readFromCache(input);
    } catch (error) {
        if (error.code != 'NoCache') {
            throw error;
        }

        let content = await readFromFile(input);
        await storeInCache(input, content)
    }

    return await compress(content);
}
