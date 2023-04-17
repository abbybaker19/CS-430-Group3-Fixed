export class Event {
    constructor(
        public id: number,
        public name: string,
        public date: string | null,
        public time: string,
        public location: string,
        public weather?: string,
        public traffic?: string
    ) {  }
  
}