const { ChatOpenAI } = require("@langchain/openai")

const main = async () => {
    const llm = new ChatOpenAI()
    const result = await llm.invoke("안녕하세요!")

    console.log(result)
    console.log(result.content)
}

main()