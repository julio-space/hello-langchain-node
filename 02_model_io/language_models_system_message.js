const { ChatOpenAI } = require("@langchain/openai")
const { HumanMessage, SystemMessage } = require("@langchain/core/messages")

const main = async () => {
    const llm = new ChatOpenAI({
        modelName: "gpt-3.5-turbo"
    })
    const messages = [
        new SystemMessage("당신은 친한 친구입니다. 존댓말을 쓰지 말고 솔직하게 답해주세요."),
        new HumanMessage("안녕?")
    ]
    const result = await llm.invoke(messages)

    console.log(result.content)
}

main()