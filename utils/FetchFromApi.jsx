import axios from "axios";
export const FetchFromApi = async (query) => {
    // console.log(query);
    const {data}=await axios.request({
        method: 'POST',
        url: 'https://chatgpt-ai-chat-bot.p.rapidapi.com/ask',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '1546dedbdamsh51b66684215d507p190685jsn26898baac941',
            'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
        },
        data: {"text":`${query}`}
    });
    return data;
}