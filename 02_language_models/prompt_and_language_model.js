const { ChatOpenAI } = require("@langchain/openai")
const { HumanMessage } = require("@langchain/core/messages")
const { PromptTemplate } = require("@langchain/core/prompts")

const main = async () => {
    const llm = new ChatOpenAI({
        modelName: "gpt-3.5-turbo"
    })

    const prompt = new PromptTemplate({
        template: "{product}는 어느 회사에서 개발한 제품인가요？",
        inputVariables: ["product"]
    })

    const result = await llm.invoke([
        new HumanMessage(await prompt.format({ product: "아이폰" }))
    ])
    
    console.log(result.content)
}

main()