const { ChatOpenAI } = require("@langchain/openai")
const { HumanMessage } = require("@langchain/core/messages")
const { CommaSeparatedListOutputParser } = require("langchain/output_parsers")

const main = async () => {
    const llm = new ChatOpenAI({
        modelName: "gpt-3.5-turbo"
    })
    const outputParser = new CommaSeparatedListOutputParser()

    const result = await llm.invoke([
        new HumanMessage("애플이 개발한 대표적인 제품 3개를 알려주세요"),
        new HumanMessage(outputParser.getFormatInstructions())
    ])

    const items = await outputParser.parse(result.content)

    for (let item of items) {
        console.log(`대표상품: ${item}`)
    }
}

main()