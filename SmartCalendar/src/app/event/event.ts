export class Event {
    constructor(
        public name: string,
        public date: string,
        public time: string,
        public location: string,
        public weather?: string,
        public traffic?: string
    ) {  }
  
}