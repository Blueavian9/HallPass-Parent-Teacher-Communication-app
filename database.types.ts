export type Message = {
    id: number;
    content: string;
    created_at: string;
};

export interface Database {
    public: {
        Tables: {
            messages: {
                Row: Message; // Represents a message row in the database
                Insert: Omit<Message, "id" | "created_at">; // Fields required for inserting a new message
                Update: Partial<Message>; // Fields that can be updated
            };
        };
    };
}
