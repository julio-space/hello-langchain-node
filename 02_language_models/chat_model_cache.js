const { ChatOpenAI } = require("@langchain/openai")
const { HumanMessage } = require("@langchain/core/messages")

const main = async () => {
    const llm = new ChatOpenAI({
        modelName: "gpt-3.5-turbo",
        cache: true
    })

    console.time("Execution Time")
    const result = await llm.invoke([
        new HumanMessage("안녕하세요!")
    ])
    console.log(result.content)
    console.timeEnd("Execution Time")

    console.time("Execution Time")
    const result2 = await llm.invoke([
        new HumanMessage("안녕하세요!")
    ])
    console.log(result.content)
    console.timeEnd("Execution Time")
}

main()