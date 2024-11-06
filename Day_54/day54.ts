interface MSG {
    sendMsg: () => void
}

abstract class Message implements MSG{
    protected recipient:string;
    protected content:string;
    constructor(recipient: string, content: string) {
        this.recipient = recipient;
        this.content = content;
    }
    public sendMsg (): void {

    }
}

class EmailMessage extends Message{
    public sendMsg (): void {
        console.log(`Send email to ${this.recipient}, ${this.content}`)
    }
}

class SMSMessage extends Message{
    
        public sendMsg (): void {
        console.log(`Send SMS to ${this.recipient}, ${this.content}`)
    }
}

class User {
    public name:string;
    constructor (name:string){
        this.name = name
    }

    public send(method: string, recipient: string, content: string): void {
        let message: Message; 

        if (method === 'email') {
        message = new EmailMessage(recipient, content);  
    } else if (method === 'sms') {
        message = new SMSMessage(recipient, content);   
    } else {
        console.log('Không có phương thức này');
        return;  
    }

    message.sendMsg(); 
    }
    
}

const user = new User('Hoang');
// Gửi tin nhắn qua EMAIL
user.send("email", "example@example.com", "Hello via Email!");

// Gửi tin nhắn qua SMS
user.send("sms", "123-456-7890", "Hello via SMS!");
