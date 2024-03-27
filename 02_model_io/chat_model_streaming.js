const { ChatOpenAI } = require("@langchain/openai")
const { HumanMessage } = require("@langchain/core/messages")

const main = async () => {
    const llm = new ChatOpenAI({
        modelName: "gpt-3.5-turbo"
    })

    const stream = await llm.stream([
        new HumanMessage("맛있는 스테이크 굽는 법을 알려주세요")
    ])

    for await (const chunk of stream) {
        process.stdout.write(chunk.content)
    }
}

main()