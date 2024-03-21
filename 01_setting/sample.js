const OpenAI = require("openai")

const main = async () => {
    const openai = new OpenAI() // API Keys는 환경변수 참조 ($OPENAI_API_KEY)
    const completion = await openai.chat.completions.create({ // OpenAI API를 호출하여 언어 모델을 호출합니다.
        model: "gpt-3.5-turbo", // 호출할 언어 모델의 이름
        messages: [
            {
                "role": "user",
                "content": "iPhone8 출시일을 알려주세요"  // 입력할 문장(프롬프트)
            }
        ]
    })
    
    console.log(completion)
    console.log(completion.choices[0].message.content)
}

main()