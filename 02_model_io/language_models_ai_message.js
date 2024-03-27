const { ChatOpenAI } = require("@langchain/openai")
const { HumanMessage, AIMessage } = require("@langchain/core/messages")

const main = async () => {
    const llm = new ChatOpenAI({
        modelName: "gpt-3.5-turbo"
    })
    const messages = [
        new HumanMessage("계란찜을 만드는 법을 알려줘"),
        new AIMessage(`
        1. 물 500ml을 준비한다.
        2. 양파 당근을 잘게 썰어 넣는다.
        3. 치킨 스톡 작은스푼 하나 넣는다.
        4. 계란물 300ml 풀어 넣는다.
        5. 타지 않게 잘 저어주며 중불에 끓인다
        `),
        new HumanMessage("답변을 영어로 번역해줘")
    ]
    const result = await llm.invoke(messages)

    console.log(result.content)
}

main()