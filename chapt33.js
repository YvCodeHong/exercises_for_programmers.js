//Create a Magic 8 Ball game that prompts for a question and 
//then displays either "Yes", "No", "Maybe", or "Ask again later".

const magicBall = () => {
    print = "What's your question? Will I be rich and famous?"
    const responses = ["Yes", "No", "Maybe", "Ask again later"]
    alert(responses[Math.floor(Math.random() * responses.length)])
}







