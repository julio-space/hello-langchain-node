const { PromptTemplate } = require("@langchain/core/prompts")

const main = async () => {
    const prompt = new PromptTemplate({
        template: "{product}은 어느 회사에서 개발한 제품인가요？",
        inputVariables: ["product"]
    })

    console.log(await prompt.format({ product: "아이폰" }))
    console.log(await prompt.format({ product: "겔럭시" }))

    const prompt2 = PromptTemplate.fromTemplate("{product}은 어느 회사에서 개발한 제품인가요!")
    console.log(await prompt2.format({ product: "아이폰" }))
}

main()