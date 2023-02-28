import axios from "axios";
export const FetchFromApi = async (query) => {
    // console.log(query);
    const {data}=await axios.request({
        method: 'POST',
        url: 'https://chatgpt-ai-chat-bot.p.rapidapi.com/ask',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': <YOUR_API_KEY>,
            'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
        },
        data: {"text":`${query}`}
    });
    return data;
}
