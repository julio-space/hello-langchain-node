const { OpenAI } = require("@langchain/openai")

const main = async () => {
    const llm = new OpenAI({
        modelName: "gpt-3.5-turbo-instruct"
    })

    const result = await llm.invoke(
        "맛있는 라면을",
        { stop: "." }
    )

    console.log(result)
}

main()