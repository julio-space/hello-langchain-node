const { PromptTemplate } = require("@langchain/core/prompts")

const main = async () => {
    const prompt = new PromptTemplate({
        template: "{product}는 어느 회사에서 개발한 제품인가요？",
        inputVariables: ["product"]
    })

    console.log(prompt.toJSON())
}

main()