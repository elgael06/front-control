

const sendMessage = (numberPhone: string, text: string):string => {    
    const url = `https://api.whatsapp.com/send/?phone=${numberPhone}&text=${text}&app_absent=0`
    return url;
}

export default sendMessage;